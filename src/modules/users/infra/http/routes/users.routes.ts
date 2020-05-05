import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '@modules/users/controllers/UsersController';
import UserAvatarController from '@modules/users/controllers/UserAvatarController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const userssRouter = Router();
const usersControllers = new UsersController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

userssRouter.post('/', usersControllers.create);

userssRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default userssRouter;
