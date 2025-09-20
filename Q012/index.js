const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

// register on('ping'), emit twice, count calls.
let count = 0;  

eventEmitter.on('ping', () => {
    count++;
    console.log('ping event emitted', count);
});

eventEmitter.emit('ping');
eventEmitter.emit('ping');
