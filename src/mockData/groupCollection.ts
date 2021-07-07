import { IGroup } from '../interfaces/IGroup';

export const Groups: Array<IGroup> = [
  {
    id: 111,
    name: 'Java basic',
    permissions: ['READ', 'WRITE']
  },
  {
    id: 112,
    name: 'Phyton advanced',
    permissions: ['READ', 'SHARE']
  },
  {
    id: 113,
    name: 'NodeJS crash course',
    permissions: ['READ', 'WRITE', 'DELETE']
  },
  {
    id: 114,
    name: 'Javascript/React',
    permissions: ['READ']
  },
  {
    id: 115,
    name: 'NodeJS in AWS',
    permissions: ['READ', 'SHARE', 'UPLOAD_FILES']
  },
  {
    id: 116,
    name: 'Business English',
    permissions: ['READ']
  }
]
