import { PORT } from './src/constants';
import { db } from './src/config/postgre.config';

import * as express from 'express';
import { router } from './src/routers/userRoutes';
import { groupRouter } from './src/routers/groupRoutes';
import { logger } from './src/config/logger';
import { winstonLogger } from './src/config/winston.config';

const app = express();
db.authenticate()
.then(()=> console.log("DB Connected..."))
.catch(err => console.log("ERROR" + err))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});

app.use(express.json());
app.use(router);
app.use(logger);

app.use('/api', router);

app.use(groupRouter);

app.use('/api', groupRouter);

process.on('uncaughtException', (err, origin) => {
  winstonLogger.error(err + 'origin:' + origin);
});
process.on('unhandledRejection', (reason, promise) => {
  winstonLogger.error('Unhandled Rejection at: %s, reason : %s', promise, reason);
});
