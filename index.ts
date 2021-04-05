import { Users } from './src/mockData/userCollection';
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

/* router.get('/', (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(Users, null, 4));
})

router.post('/user', (req, res) => {
  let user = req.body;

  res.status(204).send();
}) */
