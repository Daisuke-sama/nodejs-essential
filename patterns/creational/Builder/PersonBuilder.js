const Person = require('./Person');

class PersonBuilder {

    constructor(name) {
        this.name = name;
    }

    makeEmployee() {
        this.isEmployed = true;

        return this;
    }

    makeManager(hours =40) {
        this.isManager = true;
        this.hours = 40;

        return this;
    }

    makePartTime(hours=20){
        this.hours = hours;

        return this;
    }


    makeMoneyVault(money=0) {
        this.money = money;

        return this;
    }

    makeCart(cart=[]) {
        this.cart = cart;

        return this;
    }

    build() {
        return new Person(this);
    }
}

module.exports = PersonBuilder;
