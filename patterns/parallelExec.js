const fs = require('fs');
const beep = () => process.stdout.write("\x07");
const {promisify} = require('util');
const writeFile = promisify(fs.writeFile);
const unlinkFile = promisify(fs.unlink);
const readdir = promisify(fs.readdir);
const delay = secs => new Promise(resolve => {
    setTimeout(resolve, secs * 1000);
});

Promise.all([
    writeFile('readme.md', 'HeyHey'),
    writeFile('readme.txt', 'HeyHey'),
    writeFile('readme.json', '{ "a": "HeyHey" }'),
])
    .then(() => readdir(__dirname))
    .then(console.log);

delay(5);

Promise.all([
    unlinkFile('readme.md'),
    unlinkFile('readme.txt'),
    unlinkFile('readme.json'),
])
    .then(() => readdir(__dirname))
    .then(console.log);

delay(5);

Promise.race([
    delay(3),
    delay(7),
    delay(2),
])
    .then(() => readdir(__dirname))
    .then(console.log);
