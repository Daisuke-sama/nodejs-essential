const path = require('path');
const util = require('util');
const {getHeapStatistics} = require('v8');

const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUploads);
util.log(path.basename(__filename));
util.log(' ^ The current file name');

util.log(getHeapStatistics());
