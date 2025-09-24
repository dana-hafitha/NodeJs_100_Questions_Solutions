const { Worker, MessageChannel } = require('worker_threads');

const { port1, port2 } = new MessageChannel();

const worker = new Worker('./worker.js', {
  workerData: { port: port2 },
  transferList: [port2] 
});


port1.on('message', (msg) => {
  console.log('Main thread received:', msg);
});

port1.postMessage(21);