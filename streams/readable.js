const fs = require('fs');
const {Readable} = require('stream');

const cities = [
    'Minsk',
    'Washington D.C.',
    'London',
    'Brussels',
    'Moscow',
    'Warsaw',
    'Amsterdam',
];


class StreamFromArrayAsString extends Readable {

    constructor(array) {
        super({encoding: 'UTF-8'});
        this.arr = array;
        this.index = 0;
    }

    _read(size) {

        if (this.index <= this.arr.length) {
            const chunk = this.arr[this.index];
            this.push(chunk);
            this.index += 1;
        } else {
            this.push(null);
        }
    }
}
const peakStreamStrs = new StreamFromArrayAsString(cities);
peakStreamStrs.on('data', chunk => console.log(chunk));
peakStreamStrs.on('end', () => console.log('Completed'));


class StreamFromArrayAsObject extends Readable {

    constructor(array) {
        super({objectMode: true});
        this.arr = array;
        this.index = 0;
    }

    _read(size) {

        if (this.index <= this.arr.length) {
            const chunk = {
                data: this.arr[this.index],
                index: this.index
            };
            this.push(chunk);
            this.index += 1;
        } else {
            this.push(null);
        }
    }
}
const peakStreamObj = new StreamFromArrayAsObject(cities);
peakStreamObj.on('data', chunk => console.log(chunk));
peakStreamObj.on('end', () => console.log('Completed'));


const readStream = fs.createReadStream('../assets/ussr_cars.mp4');
readStream.on('data', chunk => {
    console.log('chuck: ', chunk.length);
});

readStream.on('end', () => {
    console.log('Completed');
});

readStream.on('error', err => {
    console.log(`error: ${err}`);
});

readStream.pause();
process.stdin.on('data', chunk => {
    if (chunk.toString().trim() === 'stop') {
        readStream.resume();
    }
    readStream.read();
});


