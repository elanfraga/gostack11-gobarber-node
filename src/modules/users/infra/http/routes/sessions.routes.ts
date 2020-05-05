import { Router } from 'express';

import SessionsController from '@modules/users/controllers/SessionsController';

const sessinosRouter = Router();
const sessionsController = new SessionsController();

sessinosRouter.post('/', sessionsController.create);

export default sessinosRouter;
