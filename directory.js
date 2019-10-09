const fs = require('fs');


if (fs.existsSync('storage')) {
    console.log('dir exist!');
} else {
    fs.mkdir('storage', err => {
        if (err) {
            throw err;
        }
        console.log('dir created');
    });
}
