const delay = (secs) => new Promise((resolve, reject) => {

    if (secs > 3) {
        reject(new Error(`${secs} is too high`));
    }

    setTimeout(() => {
        resolve('the long delay');
    }, secs * 1000);
});


delay(4)
    .then(console.log)
    .then(() => console.log('hey there!'))
    .then(() => 11)
    .then((number) => console.log(`the num was ${number}`))
    .catch((err) => console.log(`error: ${err.message}`));

console.log('end first tick');
