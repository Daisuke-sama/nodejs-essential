const process = require("process");

const grabValOfFlag = flag => {
    let valIdx = process.argv.indexOf(flag) + 1;

    return process.argv[valIdx];
};

const name = grabValOfFlag('--name');
const level = grabValOfFlag('--level');

console.log(`${level} of ${name}`);
