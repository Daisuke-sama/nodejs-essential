const fs = require('fs');
const beep = () => process.stdout.write("\x07");
const {promisify} = require('util');
const writeFile = promisify(fs.writeFile);
const unlinkFile = promisify(fs.unlink);
const delay = secs => new Promise(resolve => {
    setTimeout(resolve, secs * 1000);
});

const doStuffSequentiallyPromises = () => Promise.resolve()
    .then(() => console.log('starting'))
    .then(() => delay(1))
    .then(() => 'waiting')
    .then(console.log)
    .then(() => delay(2))
    .then(() => writeFile('fileP.txt', 'Sample File...'))
    .then(beep)
    .then(() => 'fileP.txt created')
    .then(console.log)
    .then(() => delay(3))
    .then(() => unlinkFile('fileP.txt'))
    .then(beep)
    .then(() => 'fileP.txt is removed')
    .then(console.log)
    .catch(console.error);

const doStuffSequentiallyOrdinary = () => {
    console.log('starting');
    setTimeout(() => {
        console.log('waiting');
        setTimeout(() => {
            console.log('waiting some more');
            fs.writeFile('file.txt', 'Sample File...', error => {
                if (error) {
                    console.error(error);
                } else {
                    beep();
                    console.log('file.txt created');
                    setTimeout(() => {
                        beep();
                        fs.unlink('file.txt', error => {
                            if (error) {
                                console.error(error);
                            } else {
                                console.log('file.txt removed');
                                console.log('sequential execution complete');
                            }
                        })
                    }, 3000)
                }
            });
        }, 2000)
    }, 1000)
};

const run = () => Promise.resolve()
    .then(doStuffSequentiallyOrdinary)
    .then(doStuffSequentiallyPromises);
