const os = require('os');

console.log(`OS Platform: ${os.platform()}`);
console.log(`OS CPUS count: ${os.cpus().length}`);

// Memory information
const totalMemGB = (os.totalmem() / (1024 * 1024)).toFixed(2);
console.log(`Memory: ${totalMemGB} MB`);
