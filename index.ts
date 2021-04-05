import { Users } from './src/mockData/userCollection';

const express = require('express');
const app = express();
const router = express.Router();
console.log('start');

app.listen(3000);
app.use(express.json());
app.use(router);

router.get('/', (req, res) => {
  console.log('users:', Users);

  res.json({ ok: true });
})

router.post('/user', (req, res) => {
  let user = req.body;
  // data.push(user);
  res.status(204).send();
})
