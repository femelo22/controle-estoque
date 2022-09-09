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
routes.get('/categories', new CategoriaController().list)
routes.delete('/categories/:id', new CategoriaController().delete);


export default routes;