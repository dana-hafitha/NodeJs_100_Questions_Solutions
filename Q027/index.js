// before running the code 
// change the type to "module" in package.json

import { fileURLToPath } from 'node:url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(`__dirname: ${__dirname}`);