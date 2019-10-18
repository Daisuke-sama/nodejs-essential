const { PassThrough, Duplex } = require('stream');
const {createReadStream, createWriteStream, unlink} = require('fs');

const readStream = createReadStream('../assets/ussr_cars.mp4');
const writeStream = createWriteStream('../assets/copy.mp4');


class Throttle extends Duplex {
    constructor(ms) {
        super();
        this.delay = ms;
    }

    _write(chunk, encoding, callback) {
        this.push(chunk);
        setTimeout(callback, this.delay);
    }

    _read(size) {
    }

    _final(callback) {
        this.push(null);
    }
}


const report = new PassThrough();
const throttle = new Throttle(100);

let total = 0;
report.on('data', chunk => {
    total += chunk.length;
    console.log(`bytes: ${total}`);
});

readStream
    .pipe(throttle)
    .pipe(report)
    .pipe(writeStream);
