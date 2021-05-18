import { db } from '../config/postgre.config';
import  * as Sequelize  from 'sequelize';

export const Users = db.define('groups',{
  id: { type: Sequelize.BIGINT, primaryKey: true, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  permissions: { type: Sequelize.ARRAY(Sequelize.ENUM('READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES')) , allowNull: false } 
}, {createdAt: false, updatedAt: false});
