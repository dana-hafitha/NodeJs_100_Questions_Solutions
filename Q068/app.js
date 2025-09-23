const config = require('./index.js');

console.log('Running environment:', config.env);
console.log('Port:', config.port);
console.log('Database URL:', config.dbUrl);

// to run the code 
// $env:NODE_ENV="dev"; node index.js