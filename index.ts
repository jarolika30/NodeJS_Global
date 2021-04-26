import { PORT } from './src/constants';
import { db } from './src/config/postgre.config';

import * as express from 'express';
import { router } from './src/server/userRoutes';

const app = express();
db.authenticate()
.then(()=> console.log("DB Connected..."))
.catch(err => console.log("ERROR" + err))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});

app.use(express.json());
app.use(router);

app.use('/api', router);
