const meter = require('./theModule');
const {dec} = require('./theModule');

meter.inc();
meter.inc();
dec();

console.log(meter.getCount());
