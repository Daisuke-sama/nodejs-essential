const fs = require('fs');

// sync
console.log('started reading');
const files = fs.readdirSync('./assets');
console.log('finished');

console.log(files);

// async
console.log('started reading');
fs.readdir('./assets', (err, files) => {
    if (err) {
        throw err;
    }
    console.log('finished');
    console.log(files);
});

