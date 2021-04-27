import { ICreateUser } from '../interfaces/ICreateUser';
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

  static async findUser(user: IUser) {
    return Users.findOne({ where: { name: user.name, login: user.login, password: user.password } })
    .then(res => res)
    .catch(err => err)
  }

  static async createUser(user: IUser) {
    return Users.create(user)
    .then(res => res)
    .catch(err => err)
  }

  static async getLastRecord() {
    return Users.findOne({ order: [['id', 'DESC']], limit: 1 })
    .then(res => res)
    .catch(err => err)
  }
}

