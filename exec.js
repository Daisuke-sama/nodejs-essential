const cp = require('child_process');

cp.exec('open https://google.com');
cp.exec('ls', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});
cp.exec('unknown', (err, data, stderr) => {
    console.log(stderr);
});
cp.exec('node readfile', (err, data, stderr) => {
    console.log(data);
});
