const fs = require('fs');

process.stdout.write('hi');
process.stdout.write(' there\n');

const writeStream = fs.createWriteStream('./assets/new-file.md', 'UTF-8');
process.stdin.on('data', data => {
    writeStream.write(data);
});

const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8');
const write2Stream = fs.createWriteStream('./assets/very-new-file.md', 'UTF-8');
readStream.pipe(write2Stream);

process.stdin.on('end', () => {
    fs.unlink('./assets/new-file.md', err => err);
    fs.unlink('./assets/very-new-file.md', err => err);
});
