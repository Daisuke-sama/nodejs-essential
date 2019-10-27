const Store = require('./Store');
const Shopper = require('./Shopper');
const Mall = require('./Mall');

const mall = new Mall();

const parrots = new Store('Parrot\'s friends');
const babies = new Store('Fresh girls');

const jane = new Shopper('Jane');
const jessy = new Shopper('Jessy');
const raul = new Shopper('Raul');
const greg = new Shopper('Greg');


parrots.subscribe(jane);
parrots.subscribe(jessy);
parrots.subscribe(raul);
parrots.subscribe(mall);

babies.subscribe(greg);
babies.subscribe(mall);


parrots.sale(50);
babies.sale(99);


console.log(mall.sales);
