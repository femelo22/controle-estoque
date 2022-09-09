import { Router } from 'express'
import { CategoriaController } from './controller/CategoriaController';
import { UsuarioController } from './controller/UsuarioController';
import { CategoriaService } from './services/CategoriaService';

const routes = Router();

routes.get('/users', new UsuarioController().findAll);
routes.get('/users/:id', new UsuarioController().findById);
routes.post('/users', new UsuarioController().save);
routes.put('/users/:id', new UsuarioController().update);

routes.post('/categories', new CategoriaController().save);

export default routes;