const {createReadStream, createWriteStream, unlink} = require('fs');
const readStream = createReadStream('../assets/ussr_cars.mp4');
const writeStream = createWriteStream('../assets/copy.mp4', {
    // highWaterMark: 1500,
});

readStream.on('data', chunk => {
    const result = writeStream.write(chunk);
    if (!result) {
        console.log('backpressure');
        readStream.pause();
    }
});

readStream.on('end', () => {
    writeStream.end()
});

readStream.on('error', err => {
    console.log(`error: ${err.message}`);
});

writeStream.on('close', () => {
    process.stdout.write('file is copied\n');
});

writeStream.on('drain', () => {
    console.log('drained');
    readStream.resume();
});

setTimeout(() => {
    unlink('../assets/copy.mp4', console.log);
}, 5000);
