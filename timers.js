const readline = require('readline');

const waitForMs = 5000;
const notifyEachMs = 300;
let exactTime = 0;
const mssec = 1000;

const increment = () => {
    exactTime += notifyEachMs;
    const p = Math.floor((exactTime / waitForMs) * 100);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`waiting ... ${p}%`);
};

const interval = setInterval(increment, notifyEachMs);

const timerFinished = () => {
    clearInterval(interval);
    readline.cursorTo(process.stdout, 0);
    console.log('Completed.');
};


console.log(`Setting a ${waitForMs / mssec} second delay`);
setTimeout(timerFinished, waitForMs);
