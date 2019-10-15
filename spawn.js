const cp = require('child_process');

const app = cp.spawn('node', ['questions.js']);

app.stdin.write('1\n');
app.stdin.write('2\n');
app.stdin.write('3\n');
app.stdout.on('data', data => {
    console.log(`app log: ${data}`);
});
app.on('close', () => {
    console.log('app exited');
});
