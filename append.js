const fs = require('fs');
const colorData = require('./assets/colors');

colorData.colorList.forEach(c => {
    fs.appendFile('./storage/colors.md', `${c.color}: ${c.hex} \n`, err => {
        if (err) {
            throw err;
        }
    });
});

