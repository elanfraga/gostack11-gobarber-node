import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const userssRouter = Router();
const upload = multer(uploadConfig);

userssRouter.post('/', async (request, response) => {
  const userRepository = new UsersRepository();
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService(userRepository);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

userssRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatarService = new UpdateUserAvatarService(userRepository);

    const user = await updateUserAvatarService.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default userssRouter;
