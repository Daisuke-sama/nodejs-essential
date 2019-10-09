const fs = require('fs');

// sync
const text = fs.readFileSync('./assets/Readme.md', 'UTF-8')
console.log(text);

// async
fs.readFile('./assets/Readme.md', 'UTF-8', (err, text) => {
    if (err) {
        throw err;
    }
    console.log('file contents read');
    console.log(text);
});

// async binary
fs.readFile('./assets/snow.jpg', (err, img) => {
    if (err) {
        console.log(`An error: ${err.message}`);
        process.exit();
    }

    console.log('the img');
    console.log(img);
});
