const Buyer = require('./Buyer.js');

const person = new Buyer();
person.addItem('chair');
person.addItem('rubber fist');
person.addItem('piccolo');
person.addItem('spoon');

module.exports = person;
