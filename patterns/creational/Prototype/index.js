const buyer_prototype = require('./person_prototype');

const person = buyer_prototype.clone();
person.name = 'Dane';
person.addItem('hook');

const person2 = buyer_prototype.clone();
person2.name = 'Clare';
person2.addItem('bread');
person2.addItem('cherry');
person2.addItem('raspberry');
person2.addItem('butter');
person2.addItem('cucumber');

console.log(`${person.name}: ${person.cart}`);
console.log(`${person2.name}: ${person2.cart}`);
