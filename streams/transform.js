const { Transform } = require('stream');

class ReplaceText extends Transform {

    constructor(char) {
        super();
        this.replaceChar = char;
    }

    _transform(chunk, encoding, cb) {
        const transformChunk = chunk.toString()
            .replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceChar);
        this.push(transformChunk);
        cb();
    }

    _flush(cb) {
        this.push('more stuff is being passed here...');
        cb();
    }
}

let xStream = new ReplaceText('A');

process.stdin
.pipe(xStream)
.pipe(process.stdout);