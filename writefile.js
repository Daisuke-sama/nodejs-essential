const fs = require('fs');

const md = `
# Heading

I can write here anything.

* path.join
* fs.readfile 

`;

fs.writeFile('./assets/notes.md', md.trim(), err => {
    if (err) {
        throw err;
    }
    console.log('file saved');
});
