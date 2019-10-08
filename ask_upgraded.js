const collectAnswers = require('./lib/collectAnswers.js');

const questions = [
    "How are you?",
    "How do you like rag fairs?",
    "How old are you?",
];

collectAnswers(questions, answers => {
    console.log('Thank you for your answers. ');
    console.log(answers);
    process.exit();
});
