const fs = require('fs');

function readFileContent(path, callback) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err){
      return callback(err);
    } 
    callback(null, data);
  });
}

module.exports = readFileContent;