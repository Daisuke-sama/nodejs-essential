const Person = require('./Person');

class Employee extends Person {

    constructor(name, money, employer) {
        super(name);
        this.money = money;
        if (employer) {
            this.employer = employer;
            this.employed = true;
        }
    }

    payDay(money = 0) {
        this.money += money;
    }

    toString() {
        return JSON.stringify(this);
    }
}


module.exports = Employee;
