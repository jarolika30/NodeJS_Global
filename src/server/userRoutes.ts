import { IUser } from '../inrefaces/IUser';
import { Users } from '../mockData/userCollection';

const express = require('express');
const _ = require('underscore');
const router = express.Router();

router.get('/', (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(Users, null, 4));
})

router.get('/user/:id', (req, res) => {
  const user = _.find(Users, { id: req.params.id });

  if (user) {
    res.status(200).send(JSON.stringify(user, null, 4));
  } else {
      res.status(404).json({
          message: `User with id ${req.params.id} not found`
      })
  }
});

router.delete('/user/:id', (req, res) => {
  const userExist = _.find(Users, { id: req.params.id });

  if (userExist) {
    Users.forEach(user => {
      if (user.id === req.params.id) {
        user.isDeleted = true;
      }

      return user;
    });

    res.status(200).json({
      message: "User deleted successfully"
    });
  } else {
    res.status(404).json({
      message: `User with id ${req.params.id} not found`
    })
  }
});

router.put('/user/:id', (req, res) => {
  const userExist = _.find(Users, { id: req.params.id });

  if (userExist) {
    Users.forEach(user => {
      if (user.id === req.body.id) {
        user.id = req.body.id;
        user.id = req.body.name;
        user.login = req.body.login;
        user.password = req.body.login;
        user.age = req.body.age;
        user.isDeleted = false;
      }
      
      return user;
    });

    res.status(200).json({
      message: `User updated successfully`
    })
} else {
    res.status(404).json({
      message: `User with id ${req.params.id} not found`
    })
  }
});

router.post('/addUser', (req, res) => {
  const userExist = _.find(Users, { id: req.body.id });

  if (!userExist) {
    const user: IUser = {
      id: req.body.id,
      name: req.body.name,
      login: req.body.login,
      password: req.body.password,
      age: req.body.age,
      isDeleted: false
    };

    Users.push(user);
      res.status(200).json({
      message: `User created successfully`
    });
  } else {
    res.status(409).json({
      message: `User with id ${req.body.id} already exist`
    });
  }
});

router.get('/autoSuggest', (req, res) => {
  const searchString = req.query.search;
  const limit = req.query.limit;
  const result = getAutoSuggestUsers(searchString, limit);

  if (result.length) {
    res.send(JSON.stringify(result, null, 4));
  } else {
    res.status(404).json({
      message: `No results found`
    })
  }
});

function getAutoSuggestUsers(loginSubstring, limit) {
  return Users.filter(user => user.login
    .startsWith(loginSubstring))
    .sort((userPrev, userNext) => {
      if ( userPrev.login < userNext.login ){
        return -1;
      }
      if ( userPrev.login > userNext.login ){
        return 1;
      }
      return 0;
    })
    .slice(0, limit);
}

module.exports = router;
