const fs = require('fs');

console.log('input here:');
process.stdin.on('data', data => {
    console.log(`Readed ${data.length - 1} characters`);
});

const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8');
let text = '';
readStream.on('data', data => {
    console.log(`Readed ${data.length - 1} characters`);
    text += data;
});
readStream.once('data', data => {
    console.log(data);
});
readStream.on('end', () => {
    console.log('reading is finished.');
    console.log(`total length of the text ${text.length - 1} symbols`);
});
