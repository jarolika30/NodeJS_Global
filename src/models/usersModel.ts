import { db } from '../config/postgre.config';
import  * as Sequelize  from 'sequelize';

export const Users = db.define('users',{
  id: { type: Sequelize.BIGINT, primaryKey: true, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  login: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  age: { type: Sequelize.INTEGER },
  isdeleted: { type: Sequelize.BOOLEAN, allowNull: false } 
}, {createdAt: false, updatedAt: false});
