import * as winston  from 'winston';

export const winstonLogger = winston.createLogger({
  format: winston.format.combine(
      winston.format.splat(),
      winston.format.simple()
    ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});
