class Shopper {
    constructor(name, account = 10) {
        this.name = name;
        this.account = account;
        this.items = [];
    }

    pay(item) {
        if (item.price > this.account) {
            console.log(`Cannot afford ${item.name}`)
        } else {
            console.log(`Purchasing ${item.name}`);
            this.account -= item.price;
            this.items.push(item);
        }
    }

    status() {
        console.log(`${this.name} has purchased ${this.items.length} item: `);

        this.items.forEach(val => {
            console.log(`  > ${val.name} - ${val.price}`);
        })

        console.log(`${this.name} has $${this.account.toFixed(2)} remaining.`);
    }
}

module.exports = Shopper;
