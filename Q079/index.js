const { performance } = require('perf_hooks');

async function asyncOperation() {
  return new Promise((resolve) => setTimeout(resolve, 500)); 
}

async function main() {
  performance.mark('start');

  await asyncOperation();

  performance.mark('end');
  performance.measure('Async Operation', 'start', 'end');

  const measure = performance.getEntriesByName('Async Operation')[0];
  console.log(`Duration: ${measure.duration.toFixed(2)} ms`);
}

main();