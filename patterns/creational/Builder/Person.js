class Person {

    constructor(builder) {
        this.name = builder.name;
        this.isEmployed = builder.isEmployed;
        this.isManager = builder.isManager;
        this.hours = builder.hours || 0;
        this.treasure = builder.money || 0;
        this.cart = builder.cart || [];
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Person;
