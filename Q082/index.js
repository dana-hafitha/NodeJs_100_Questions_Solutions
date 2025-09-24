const { Queue, Worker } = require('bullmq');
const Redis = require('ioredis');

const redisConfig = {
  port: 4000,
  host: '127.0.0.1',
  maxRetriesPerRequest: null,
};
const redisConnection = new Redis(redisConfig);

const emailQueue = new Queue('email', { connection: redisConnection });

const enqueue = async (to, subject, body) => {
  await emailQueue.add('email:send', { to, subject, body });
  console.log(`Job enqueued: email:send -> ${to}`);
};

const worker = new Worker(
  'email',
  async (job) => {
    if (job.name === 'email:send') {
      const { to, subject, body } = job.data;
      console.log(`📨 Sending email to ${to} | subject: ${subject}`);
      await new Promise((res) => setTimeout(res, 1000)); // simulate email sending
      console.log(`✅ Email sent to ${to}`);
    }
  },
  { connection: redisConnection, concurrency: 5 }
);

(async () => {
  await enqueue('user1@example.com', 'Welcome!', 'Thanks for signing up');
  await enqueue('user2@example.com', 'Hello!', 'Glad to have you here');
})();