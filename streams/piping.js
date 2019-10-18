const {createReadStream, createWriteStream, unlink} = require('fs');
const readStream = createReadStream('../assets/ussr_cars.mp4');
const writeStream = createWriteStream('../assets/copy.mp4');

readStream.pipe(writeStream).on('error', console.error);


const newWriteStream = createWriteStream('../assets/new-file.txt');

process.stdin.pipe(newWriteStream).on('end', () => {
    unlink('./assets/copy.mp4', err => err);
    unlink('./assets/copy.mp4', err => err);
});
