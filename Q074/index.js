const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master PID: ${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();
    console.log(`Worker started with PID: ${worker.process.pid}`);
  }

} else {
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello from worker ${process.pid}\n`);
  }).listen(3000, () => {
    console.log(`Worker ${process.pid} listening on port 3000`);
  });
}