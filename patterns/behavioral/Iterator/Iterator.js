class Iterator {

    constructor(items = []) {
        this.items = items;
        this.index = 0;
    }

    first() {
        const [first] = this.items;

        return first;
    }

    last() {
        const [last] = [...this.items].reverse();

        return last;
    }

    hasNext() {
        return this.index < this.items.length - 1;
    }

    next() {
        if (this.hasNext()) {
            this.index += 1;
        }

        return this.current();
    }

    hasPrev() {
        return this.index > 0;
    }

    prev() {
        if (this.hasPrev()) {
            this.index -= 1;
        }

        return this.current();
    }

    current() {
        return this.items[this.index];
    }
}

module.exports = Iterator;
