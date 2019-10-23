class CatalogItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log(`${this.name}: $${this.price}`)
    }

    get total() {
        return this.price;
    }
}

module.exports = CatalogItem;
