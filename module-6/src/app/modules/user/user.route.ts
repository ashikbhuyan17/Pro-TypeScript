import express from 'express';
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUsers,
} from './user.controller';
const router = express.Router();

// pattern => route -> controller -> service
/*
   /
   /admins
   /:id   dynamic 
*/

router.get('/', getUsers);
router.get('/admins', getAdminUsers);
router.get('/:id', getUserById);
router.post('/create-user', createUser);

export default router;
