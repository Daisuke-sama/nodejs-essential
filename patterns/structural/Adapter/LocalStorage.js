const {writeFile, writeFileSync, existsSync, readFileSync, unlink} = require('fs');
const fileName = '../../../www/localStorage.json';

class LocalStorage {

    constructor() {
        if (existsSync(fileName)) {
            console.log('Loading localStorage.json');
            const txt = readFileSync(fileName);
            this.items = JSON.parse(txt);
        } else {
            this.items = {};
        }
    }

    get length() {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key, value) {
        this.items[key] = value;
        writeFileSync(fileName, JSON.stringify(this.items), error => {
            if (error) {
                console.error(error);
            }
        })

    }

    clear() {
        this.items = {};
        unlink(fileName, () => {
            console.log('Local storage cleared');
        })
    }
}

module.exports = LocalStorage;
