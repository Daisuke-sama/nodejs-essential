const InventoryItem = require('./InventoryItem');
const Iterator = require('./Iterator');

require('readline').emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('Press any direction key...');

const inventory = new Iterator([
    new InventoryItem("Poles", 123),
    new InventoryItem("Boots", 12),
    new InventoryItem("Fries", 23),
    new InventoryItem("Shake", 54),
    new InventoryItem("Skis", 432),
    new InventoryItem("Burgers", 432),
    new InventoryItem("Jeans", 89),
    new InventoryItem("Shoes", 98),
]);

process.stdin.on('keypress', (str, key) => {

    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    switch(key.name) {

        case 'right' :
            inventory.next().writeLn();
            break;

        case 'left' :
            inventory.prev().writeLn();
            break;

        case 'down' :
            inventory.last().writeLn();
            break;

        case 'up' :
            inventory.first().writeLn();
            break;

        case 'c' :
            if (key.ctrl) {
                process.exit()
            }
    }

});
