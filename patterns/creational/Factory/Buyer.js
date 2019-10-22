const Person = require('./Person');

class Buyer extends Person {

    constructor(name, money) {
        super(name);
        this.money = money;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Buyer;
