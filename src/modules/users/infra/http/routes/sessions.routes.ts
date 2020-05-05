import { Router } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessinosRouter = Router();

sessinosRouter.post('/', async (request, response) => {
  const userRepository = new UsersRepository();

  const { email, password } = request.body;

  const authenticateUserService = new AuthenticateUserService(userRepository);

  const { user, token } = await authenticateUserService.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessinosRouter;
