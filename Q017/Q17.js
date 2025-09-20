const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

// Create a pipeline that handles errors properly
pipeline(
  fs.createReadStream('big.txt'),
  zlib.createGzip(),
  fs.createWriteStream('big.txt.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed:', err);
    } else {
      console.log('Pipeline succeeded!');
    }
  }
);