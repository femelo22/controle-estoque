import { Router } from 'express'
import { UsuarioController } from './controller/UsuarioController';

const routes = Router();

routes.get('/users', new UsuarioController().findAll);
routes.get('/users/:id', new UsuarioController().findById)
routes.post('/users', new UsuarioController().save);

export default routes;