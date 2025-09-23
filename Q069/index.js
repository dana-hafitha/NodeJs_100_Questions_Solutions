const logger = require('./logger.js');

logger.info('Server started');
logger.warn('This is a warning');
logger.error('Something went wrong', { errorCode: 123 });
