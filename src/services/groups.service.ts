import { IGroup } from '../interfaces/IGroup';
import { Groups } from '../models/groupModel';

export default class GroupsService {
  static async getGroup( groupId : string | undefined) {
    return Groups.findByPk(groupId)
    .then(users => users)
    .catch(err => err)
  }

  static async getAll() {
    return Groups.findAll()
    .then(groups => groups)
    .catch(err => err)
  }

  static async createGroup(group: IGroup) {
    return Groups.create(group)
    .then(res => res)
    .catch(err => err)
  }

  static async updateGroup(group: IGroup) {
    return Groups.update(group, {where: {id: group.id}})
    .then(res => res)
    .catch(err => err)
  }

  static async findGroupById(groupId: number) {
    return Groups.findOne({ where: { id: groupId } })
    .then(res => res)
    .catch(err => err)
  }

  static async getLastRecord() {
    return Groups.findOne({ order: [['id', 'DESC']], limit: 1 })
    .then(res => res)
    .catch(err => err)
  }

  static async findGroup(group: IGroup) {
    return Groups.findOne({ where: { name: group.name, permissions: group.permissions } })
    .then(res => res)
    .catch(err => err)
  }

  static async deleteGroup(group: IGroup) {
    return Groups.destroy({where: {id: group.id}})
    .then(res => res)
    .catch(err => err)
  }
}

