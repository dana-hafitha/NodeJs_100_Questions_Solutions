const fs = require('fs').promises;

async function writeFile() {
  try {
    // Write JSON data
    const data = { ok:true};
    await fs.writeFile('results.json', JSON.stringify(data, null, 2), 'utf8');

    console.log('File writing succeeded.');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

writeFile();