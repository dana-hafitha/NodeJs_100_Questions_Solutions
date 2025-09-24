const fs = require('fs');
const parser = require('csv-parser');
const results = [];

fs.createReadStream('input.csv')
  .pipe(parser())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });