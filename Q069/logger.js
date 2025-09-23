const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

// Define daily rotate file transport
const dailyRotateTransport = new transports.DailyRotateFile({
  filename: 'logs/application-%DATE%.log', 
  datePattern: 'YYYY-MM-DD',                         
  format: format.combine(
    format.timestamp(),
    format.json()                           // JSON format
  )
});

const logger = createLogger({
  level: 'info',
  transports: [
    dailyRotateTransport,
    consoleTransport
  ]
});

module.exports = logger;
