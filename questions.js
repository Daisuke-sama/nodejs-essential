const questions = [
    "How are you?",
    "How do you like rag fairs?",
    "How old are you?",
];

const ask = (idx = 0) => {
    process.stdout.write(`\n\n\n ${questions[idx]}`);
    process.stdout.write(' > ');
};

ask();

const answers = [];
process.stdin.on('data', data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    const [state, fair, age] = answers;

    console.log(`
        Thank you!
        
        Now I know that you are ${age}th year old, and you feel ${state}, and you think about fairs "${fair}". Bye.      
    `);
});
