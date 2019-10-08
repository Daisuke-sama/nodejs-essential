const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('customEvent', (message, account = 'unknown') => {
    console.log(`${account}: ${message}`);
});

emitter.emit('customEvent', 'Hello World', 'Computer');
emitter.emit('customEvent', 'That is cool');

process.stdin.on('data', data => {
    const input = data.toString().trim();

    if (input === 'exit') {
        emitter.emit('customEvent', 'Thank you!', 'process');
        process.exit();
    }

    emitter.emit('customEvent', input, 'terminal');
});
