const buf = Buffer.from('Hello', 'utf8');
const buf2 = Buffer.from('World', 'utf8');
console.log(Buffer.concat([buf, buf2]).toString());