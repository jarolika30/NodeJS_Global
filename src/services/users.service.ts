import { IUser } from '../interfaces/IUser';
import { Users } from '../models/usersModel';

export default class UsersService {
  static async getUser( userId : string | undefined) {
    return Users.findByPk(userId)
    .then(users => users)
    .catch(err => err)
  }

  static async getAll() {
    return Users.findAll()
    .then(users => users)
    .catch(err => err)
  }
}

