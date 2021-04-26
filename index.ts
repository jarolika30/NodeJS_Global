import { PORT } from './src/constants';
import { db } from './src/config/postgre.config';

const express = require('express');
const router = require('./src/server/userRoutes');
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
