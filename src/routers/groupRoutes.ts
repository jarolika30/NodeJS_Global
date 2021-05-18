import { IGroup } from '../interfaces/IGroup';
import GroupsService from '../services/groups.service';
import * as express from 'express';

export const groupRouter = express.Router();

groupRouter.get('/groups', async (req, res) => {
  res.header("Content-Type",'application/json');
  const groups = await GroupsService.getAll();

  res.send(JSON.stringify(groups, null, 4));
})

groupRouter.get('/group/:id', async (req, res) => {
  const group = await GroupsService.getGroup(req.params.id);

  if (group) {
    res.status(200).send(JSON.stringify(group, null, 4));
  } else {
    res.status(404).json({
      message: `Group with id ${req.params.id} not found`
    })
  }
});

groupRouter.delete('/group/:id', async (req, res) => {
  const groupExist = await GroupsService.findGroupById(req.params.id);

  if (groupExist) {
      await GroupsService.deleteGroup(groupExist);

    res.status(200).json({
      message: "Group deleted successfully"
    });
  } else {
    res.status(404).json({
      message: `Group with id ${req.params.id} not found`
    })
  }
});

groupRouter.put('/group/:id', async (req, res) => {
  const group: IGroup = {
    id: res.body.id,
    name: req.body.name,
    permissions: req.body.permissions
  };

  const groupExist = await GroupsService.findGroupById(req.params.id);

  if (groupExist) {
    await GroupsService.updateGroup(group);
    res.status(200).json({
      message: `Group updated successfully`
    })
} else {
    res.status(404).json({
      message: `Group with id ${req.params.id} not found`
    })
  }
});

groupRouter.post('/addGroup', async (req, res) => {
  const lastRecord = await GroupsService.getLastRecord();

  const group: IGroup = {
    id: +lastRecord.id + 1,
    name: req.body.name,
    permissions: req.body.permissions
  };

  const groupExist = await GroupsService.findGroup(group);

  if (!groupExist) {
    await GroupsService.createGroup(group);
    res.status(200).json({
      message: `Group was created successfully`
    });
  } else {
    res.status(409).json({
      message: `Group already exists`
    });
  }
});
