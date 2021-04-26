import { db } from '../config/postgre.config'
import  Sequelize  from 'sequelize' 

export const Users = db.define('Users',{
  id: { type: Sequelize.BIGINT, primaryKey: true, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  login: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  age: { type: Sequelize.INTEGER },
  isDeleted: { type: Sequelize.BOOLEAN, allowNull: false } 
}, {createdAt: false, updatedAt: false});
