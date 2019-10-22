const Person = require('./Person');
const PersonBuilder = require('./PersonBuilder');

const sue = new Person('Sue', true, true, 60);
const builtSue = new PersonBuilder('Sue').makeEmployee().makeManager(55).build();
console.log(sue.toString());
console.log(builtSue.toString());

const bill = new Person('Bill', true, false, 20);
const builtBill = new PersonBuilder('Bill').makeEmployee().makePartTime(20).build();
console.log(bill.toString());
console.log(builtBill.toString());

const derrick = new Person('Derrick', true, false);
const builtDerrick = new PersonBuilder('Derrick').makeEmployee().build();
console.log(derrick.toString());
console.log(builtDerrick.toString());

const charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);
const builtCharles = new PersonBuilder('Charles')
    .makeMoneyVault(300)
    .makeCart(['sweets', 'cookies'])
    .build();
console.log(charles.toString());
console.log(builtCharles.toString());

const xuy = new Person('Xuy', false, false, 0, 1000);
const buildXuy = new PersonBuilder('Xuy').makeMoneyVault(1).build();
console.log(xuy.toString());
console.log(buildXuy.toString());
