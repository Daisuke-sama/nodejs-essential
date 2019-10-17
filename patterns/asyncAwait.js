const fs = require('fs');
const beep = () => process.stdout.write("\x07");
const {promisify} = require('util');
const writeFile = promisify(fs.writeFile);
const unlinkFile = promisify(fs.unlink);
const readdir = promisify(fs.readdir);
const delay = secs => new Promise(resolve => {
    setTimeout(resolve, secs * 1000);
});

async function start() {
    let files = await readdir(__dirname);
    console.log(files);
}

start();

const doStuffSequentiallyAsync = async () => {
    console.log('starting');
    await delay(1);
    console.log('waiting');
    await delay(2);
    try {
        await writeFile('file.txt', 'Sample text');
        beep();
    } catch (err) {
        console.error(err)
    }
    console.log('file.txt was created');
    await delay(3);
    await unlinkFile('file.txt');
    beep();
    console.log('file.txt removed');

    return Promise.resolve();
};

doStuffSequentiallyAsync()
    .then(() => console.log('One other function'));


