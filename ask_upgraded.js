const collectAnswers = require('./lib/collectAnswers.js');

const questions = [
    "How are you?",
    "How do you like rag fairs?",
    "How old are you?",
];

const answerEvents = collectAnswers(questions);

answerEvents.on('answer', answer => console.log(`question answered: ${answer}`));

answerEvents.on('complete', answers => {
    console.log('Thank you for your answers. ');
    console.log(answers);
});

answerEvents.on('complete', () => process.exit());
