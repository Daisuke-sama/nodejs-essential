const fs = require('fs');

fs.copyFileSync('./assets/colors.json', './assets/copy-colors.json');
fs.renameSync('./assets/copy-colors.json', './assets/colorData.json');
console.log('renamed sync');

fs.rename('./assets/colorData.json', './storage/coloreData.json', err => {
    if (err) {
        throw err;
    }
});

setTimeout(() => {
    fs.unlinkSync('./storage/coloreData.json');
}, 5000);
console.log('deleted');
