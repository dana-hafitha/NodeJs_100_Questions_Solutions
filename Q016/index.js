const fs = require('fs');

const readableStream = fs.createReadStream('input.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64KB chunks
});

let lineCount = 0;
let partialLine = '';

readableStream.on('data', (chunk) => {
  const lines = (partialLine + chunk).split('\n');
  partialLine = lines.pop();
  lineCount += lines.length;
});

readableStream.on('end', () => {
  if (partialLine) {
    lineCount++;
  }
  console.log(`Total lines: ${lineCount}`);
});

readableStream.on('error', (err) => {
  console.error(`An error occurred: ${err.message}`);
});