const fs = require('fs');
const { promisify } = require('util');

const delay = (secs, cb) => {
    if (secs > 3) {
        cb(new Error(`the too long delay ${secs}`));
    } else {
        setTimeout(
            () => cb(null, `${secs} seconds delay`),
            secs
        );
    }
};
delay(5, (err, msg) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(msg);
    }
});


const promiseDelay = promisify(delay);
promiseDelay(2)
    .then(console.log)
    .catch(err => console.log(`error: ${err.message}`));


const writeFile = promisify(fs.writeFile);
writeFile('example.txt', 'Example')
    .then(()=> console.log('file successfully created'))
    .catch(err => console.log('error writing file'));
