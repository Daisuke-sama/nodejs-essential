const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Where have you been?', answer => {
    console.log(`Your answer: ${answer}`);
});
