const userFactory = require('./userFactoryMethod');

const daisuke = userFactory('Daisuke', 100);
const liana = userFactory('Liana', 100, 'employee', 'The comment');
liana.payDay(100);

console.log(daisuke.toString());
console.log(liana.toString());
