let msg = `Hello`;
for (let i = 2; i < process.argv.length; i++) {
    msg += '-' + process.argv[i];
}
console.log(msg);