const fs = require("fs").promises;

async function readFiles() {
    try {
        const [dataA, dataB] = await Promise.all([
            fs.readFile('a.txt'),
            fs.readFile('b.txt')
        ]);
        console.log(`the total size = ${dataA.length + dataB.length}`);
    } catch (err) {
        console.error('error reading files:', err);
    }
}
readFiles();