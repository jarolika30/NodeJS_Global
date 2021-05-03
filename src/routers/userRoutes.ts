import { IUser } from '../interfaces/IUser';
import { Users as MockUsers } from '../mockData/userCollection';
import UsersService from '../services/users.service';
import * as express from 'express';
import { _ } from 'underscore';

export const router = express.Router();

router.get('/', async (req, res) => {
  res.header("Content-Type",'application/json');
  const users = await UsersService.getAll();

  res.send(JSON.stringify(users, null, 4));
})

router.get('/user/:id', async (req, res) => {
  const user = await UsersService.getUser(req.params.id);

  if (user) {
    res.status(200).send(JSON.stringify(user, null, 4));
  } else {
    res.status(404).json({
      message: `User with id ${req.params.id} not found`
    })
  }
});

router.delete('/user/:id', async (req, res) => {
  const userExist = await UsersService.findUser(req.params.id);

  if (userExist) {
      userExist.isdeleted = true;

      await UsersService.deleteUser(userExist);

    res.status(200).json({
      message: "User deleted successfully"
    });
  } else {
    res.status(404).json({
      message: `User with id ${req.params.id} not found`
    })
  }
});

router.put('/user/:id', async (req, res) => {
  const user: IUser = {
    id: res.body.id,
    name: req.body.name,
    login: req.body.login,
    password: req.body.password,
    age: req.body.age,
    isdeleted: false
  };

  const userExist = await UsersService.findUser(req.params.id);

  if (userExist) {
    await UsersService.updateUser(user);
    res.status(200).json({
      message: `User updated successfully`
    })
} else {
    res.status(404).json({
      message: `User with id ${req.params.id} not found`
    })
  }
});

router.post('/addUser', async (req, res) => {
  const lastRecord = await UsersService.getLastRecord();

  const user: IUser = {
    id: +lastRecord.id + 1,
    name: req.body.name,
    login: req.body.login,
    password: req.body.password,
    age: req.body.age,
    isdeleted: false
  };

  const userExist = await UsersService.findUser(user);

  if (!userExist) {
    await UsersService.createUser(user);
    res.status(200).json({
      message: `User was created successfully`
    });
  } else {
    res.status(409).json({
      message: `User already exists`
    });
  }
});

router.get('/autoSuggest', async (req, res) => {
  const searchString = req.query.search;
  const limit = req.query.limit;
  const result = await UsersService.getAutoSuggestUsers(searchString, limit);

  if (result.length) {
    res.send(JSON.stringify(result, null, 4));
  } else {
    res.status(404).json({
      message: `No results found`
    })
  }
});
