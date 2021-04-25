import { PORT } from './src/constants';

const express = require('express');
const router = require('./src/server/userRoutes');
const app = express();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});

app.use(express.json());
app.use(router);

app.use('/api', router);
