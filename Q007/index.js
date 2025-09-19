// Include the fs module
const fs = require('fs');

// Asynchronously read 'data.txt'
fs.readFile('./data.txt' , (err, data1) => {
  if (err) {
    console.error('Error reading data.txt:', err);
  } else {
    console.log('data.txt content from .readfile:', data1);
  }
});

// Synchronously read 'data.txt'
try {
  const data = fs.readFileSync('./data.txt');
  console.log('data.txt content from .readFileSync:', data);
} catch (err) {
  console.error('Error reading data.txt:', err);
}