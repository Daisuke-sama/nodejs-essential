const Employee = require('./Employee');
const Buyer = require('./Buyer');

let userFactoryMethod = (name, treasure=0, type, employer) => {
    if (type === 'employee') {
        return new Employee(name, treasure, employer);
    } else {
        return new Buyer(name, treasure);
    }
};

module.exports = userFactoryMethod;
