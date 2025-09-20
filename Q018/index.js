const fs = require('fs');

const readableStream = fs.createReadStream('input.txt', {
  encoding: 'utf8'
});

const writeStream = fs.createWriteStream('output.txt', {
  encoding: 'utf8' 
});

// readableStream.pipe(writeStream);

readableStream.on("data",(chunk)=>{
  if (!writeStream.write(chunk)) {
    readableStream.pause();
    writeStream.once('drain', () => readableStream.resume());
  }
});

readableStream.on('end', () => writeStream.end());