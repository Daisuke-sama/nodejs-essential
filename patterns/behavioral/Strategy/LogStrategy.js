const path = require('path');
const {appendFile} = require('fs');

class LogStrategy {

    static noDate(timestamp, message) {
        console.log(message);
    }

    static toFile(timestamp, message) {
        const filename = path.join(__dirname, '..', '..', '..', 'www', 'logs.txt');
        appendFile(filename, `${timestamp} > ${message}\n`, err => {
            if (err) {
                console.log('Error occurred when wrote file.');
                console.error(err);
            }
        });
    }

    static toConsole(timestamp, message) {
        console.log(`${timestamp} - ${message}`);
    }

    static none() {

    }
}

module.exports = LogStrategy;
