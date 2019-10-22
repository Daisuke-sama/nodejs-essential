const logger = require('./Logger.js');
const Shopper = require('./Shopper.js');
const Store = require('./Store.js');


logger.log('starting app...');

const me = new Shopper('Paul', 500000);
var ski_shop = new Store('Steep and Deep Supplies', [
    {
        item: 'Shoes',
        qty: 5,
        price: 750
    },
    {
        item: 'Hat',
        qty: 20,
        price: 5
    }
]);

logger.log('finished config...');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`   ${log.message}`));
