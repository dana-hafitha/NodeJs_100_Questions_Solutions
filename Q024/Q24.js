// Measure the time taken to read a large file using fs.readFile
const fs = require('fs');
console.time('readFile');
fs.readFile('large.bin', (err, data) => {
  if (data) {
    console.log(`File read successfully, ${data.length} bytes`);
  } else if (err) {
    throw err;
  }
  console.timeEnd('readFile');
});
