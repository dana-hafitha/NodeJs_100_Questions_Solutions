const fs = require('fs');
const { Transform } = require('stream');

const readStream = fs.createReadStream("./input.txt");
const writeStream = fs.createWriteStream("./output.txt");

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

readStream.pipe(upperCase).pipe(writeStream);