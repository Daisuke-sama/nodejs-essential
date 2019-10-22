class FS_Proxy {

    constructor(fsSubject) {
        this.fs = fsSubject;
    }

    readFile(path, format, callback) {
        if (!path.match(/.txt$|.TXT$/)) {
            return callback(new Error('Can only read text files.'));
        }

        this.fs.readFile(path, format, (err, contents) => {
            if (err) {
                console.error(err);
                return callback(err);
            }

            return callback(null, contents);
        })
    }
}

module.exports = FS_Proxy;
