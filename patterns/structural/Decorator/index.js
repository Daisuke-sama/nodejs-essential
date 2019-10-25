const Shopper = require('./Shopper');
const {
    InventoryItem,
    PremiumInventoryItem,
    PlatinumInventoryItem
} = require('./InventoryItem');

const person = new Shopper('Derrick', 500);
const knife = new InventoryItem('knife', 200);
const spoon = new InventoryItem('spoon', 120);

const platinumSpoon = new PlatinumInventoryItem(spoon);
const premiumPlatinumSpoon = new PremiumInventoryItem(spoon);
const premiumKnife = new PremiumInventoryItem(knife);

person.pay(knife);
person.pay(spoon);
person.pay(premiumKnife);
person.pay(premiumPlatinumSpoon);
person.pay(platinumSpoon);

person.status();
premiumKnife.print();
premiumPlatinumSpoon.print();
