const { spawn } = require('child_process');

const child = spawn('node', ['-v']);

child.stdout.on('data', (data) => {
  process.stdout.write(`Child stdout: ${data}`);
});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});