// let __dirname = "/usr/app";
// let path = require('path');

// console.log(path.join(path.basename(__dirname), '/assets/img/logo.png'));

import path from 'path';

// Get filename from a path
let __dirname = path.basename('/usr/app');
console.log(path.join(__dirname, 'assets', 'img', 'logo.png'));