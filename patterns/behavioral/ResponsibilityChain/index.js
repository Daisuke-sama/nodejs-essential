const Store = require('./Store.js');
const inventory = require('./inventory.json');

const skiShop = new Store('Steep and Deep', inventory);

const results1 = skiShop.find('ski poles');
const results2 = skiShop.find('powder skis');

console.log(results1, results2);
