const EventEmitter = require('events');
const myEmitter = new EventEmitter();


const log1 = () => {
    console.log('log1 is running.');
};

const log2 = () => {
    console.log('log2 is running.');
};

myEmitter.on('myEvent', log1);
myEmitter.on('myEvent', log2);

console.log('--- Both logs are running ---');
myEmitter.emit('myEvent');

console.log('\n--- Removing log2 listener ---');
myEmitter.removeListener('myEvent', log2);

console.log('\n--- Just log1 is running ---');
myEmitter.emit('myEvent');