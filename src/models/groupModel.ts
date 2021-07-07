import { db } from '../config/postgre.config';
import  * as Sequelize  from 'sequelize';
import { Users } from './usersModel';

export const Groups = db.define('groups',{
  id: { type: Sequelize.BIGINT, primaryKey: true, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  permissions: { type: Sequelize.ARRAY(Sequelize.ENUM('READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES')) , allowNull: false } 
}, {createdAt: false, updatedAt: false});

export const UserGroups = db.define('user_groups', {}, { timestamps: false });
Users.belongsToMany(Groups, { through: UserGroups, foreignKey: 'user_id', otherKey: 'group_id' });
Groups.belongsToMany(Users, { through: UserGroups, foreignKey: 'group_id', otherKey: 'user_id'  });
