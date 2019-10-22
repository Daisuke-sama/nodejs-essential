class Person {
    constructor(name) {
        this.name = name;
        this.employed = false;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Person;
