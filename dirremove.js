const fs = require('fs');

fs. readdirSync('./storage').forEach(fname => {
    fs.unlinkSync(`./storage/${fname}`);
    console.log(`removed: ./storage/${fname}`);
});

setTimeout(() => {
    fs.rmdir('./storage', err => {
        if (err) {
            throw err;
        }
        console.log('folder is deleted.');
    });
}, 5000);

