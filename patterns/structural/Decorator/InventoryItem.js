class InventoryItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log(`${this.name} costs ${item.price}`);
    }
}

class PlatinumInventoryItem {
    constructor(baseItem) {
        this.name = `Platinum ${baseItem.name}`;
        this.price = 250 + baseItem.price;
        this.cutsGlass = true;
    }
}

class PremiumInventoryItem {
    constructor(baseItem) {
        this.name = `Premium ${baseItem.name}`;
        this.price = 100 + baseItem.price;
    }

    print() {
        console.log(`${this.name} costs more.`);
    }
}

module.exports = {InventoryItem, PlatinumInventoryItem, PremiumInventoryItem};
