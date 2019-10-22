const path = require('path');
const FS_Proxy = require('./FS_Proxy.js');

const fs = new FS_Proxy(require('fs'));

const txt = path.join(__dirname + '/../../../www', 'text.txt');
const html = path.join(__dirname + '/../../../www', 'text.html');

const result = (err, contents) => {
    if (err) {
        console.log('\x07');
        console.error(err);
        process.exit(0);
    }

    console.log('...reading file...');
    console.log(contents);
};

fs.readFile(txt, 'UTF-8', result);
// fs.readFile(html, 'UTF-8', result);
