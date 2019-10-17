const {createReadStream, createWriteStream, unlink} = require('fs');
const readStream = createReadStream('../assets/ussr_cars.mp4');
const writeStream = createWriteStream('../assets/copy.mp4');

readStream.on('data', chunk => {
    writeStream.write(chunk);
});

readStream.on('end', () => writeStream.end());

readStream.on('error', err => {
    console.log(`error: ${err.message}`);
});

writeStream.on('close', () => {
    process.stdout.write('file is copied\n');
});

setTimeout(() => {
    unlink('../assets/copy.mp4', console.log);
}, 5000);
