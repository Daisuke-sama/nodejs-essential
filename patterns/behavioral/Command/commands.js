const {writeFile,unlink} = require('fs');
const path = require('path');


class ExitCommand {

    get name() {
        return 'The Exit Command';
    }

    execute() {
        process.exit(0);
    }
}

class CreateCommand {

    constructor(filename, text) {
        this.filename = filename;
        this.content = text;
        this.absolutePath = path.join(__dirname, filename);
    }

    get name() {
        return `create ${this.filename}`;
    }

    execute() {
        writeFile(this.absolutePath, this.content, f => f);
    }

    undo() {
        unlink(this.absolutePath, f => f);
    }
}

module.exports = {ExitCommand, CreateCommand};
