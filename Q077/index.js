const { Worker } = require('worker_threads');

function runFibonacci(n) {
  return new Promise((res, rej) => {
    const worker = new Worker('./fib.js', { workerData: n });

    worker.on('message', res); 
    worker.on('error', rej);     
    worker.on('exit', code => {
      if (code !== 0)
        rej(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

(async () => {
  console.time('fibonacci');
  const result = await runFibonacci(40);
  console.timeEnd('fibonacci');
  console.log(`Fibonacci(40) = ${result}`);
})();
