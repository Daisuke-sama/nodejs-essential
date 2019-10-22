class Buyer {
    constructor(name) {
        this._name = name;
        this._cart = [];
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get cart() {
        return this._cart.join(', ');
    }

    addItem(productName) {
        this._cart.push(productName);
    }

    clone() {
        const proto = Object.getPrototypeOf(this);
        const cloned = Object.create(proto);

        cloned._name = this._name;
        cloned._cart = [...this._cart];

        return cloned;
    }
}

module.exports = Buyer;
