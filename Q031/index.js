const fs = require("fs");

fs.readFile("a.txt", (err, data) => {
    if (err) {
        throw err;
    }
    else {
        console.log(data.length);
    }
})


const fs1 = require('fs').promises;

async function readFile() {
    try {
        const data = await fs1.readFile('a.txt');
        console.log(data.length);
    } catch (err) {
        console.error('Error:', err);
    }
}

readFile();