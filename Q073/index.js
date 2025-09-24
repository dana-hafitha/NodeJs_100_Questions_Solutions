const originalText = "Hello, Dana!";

const base64 = Buffer.from(originalText, 'utf8').toString('base64');
console.log("Base64:", base64);

const utf8Text = Buffer.from(base64, 'base64').toString('utf8');
console.log("UTF-8:", utf8Text);