const fs = require('fs').promises;

async function writeAndAppend() {
  try {
    await fs.writeFile('out.txt', 'Hello ');
    console.log('File written successfully.');

    await fs.appendFile('out.txt', 'World!');
    console.log('Content appended successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}

writeAndAppend();
