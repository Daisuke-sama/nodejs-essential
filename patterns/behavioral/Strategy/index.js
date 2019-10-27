const logger = require('./Logger');

logger.log('Hello');
logger.log('Hi');
logger.log('Hey');

logger.changeStrategy('toFile');

logger.log('Hello');
logger.log('Hi');
logger.log('Hey');
