const path = require("path");

console.log(__dirname);
console.log(__filename);
console.log(`The file name is ${path.basename(__filename)}`);

console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

const [,, name] = process.argv;
console.log(`My name is ${name}`);
