import { Router } from 'express'
import { CategoriaController } from './controller/CategoriaController';
import { FornecedorController } from './controller/FornecedorController';
import { ProdutoController } from './controller/ProdutoController';
import { UsuarioController } from './controller/UsuarioController';

const routes = Router();

routes.get('/users', new UsuarioController().findAll);
routes.get('/users/:id', new UsuarioController().findById);
routes.post('/users', new UsuarioController().save);
routes.put('/users/:id', new UsuarioController().update);

routes.get('/suppliers', new FornecedorController().findAll);
routes.get('/suppliers/:id', new FornecedorController().findById);
routes.post('/suppliers', new FornecedorController().save);
routes.put('/suppliers/:id', new FornecedorController().update);

routes.post('/categories', new CategoriaController().save);
routes.get('/categories', new CategoriaController().list)
routes.delete('/categories/:id', new CategoriaController().delete);

routes.post('/products', new ProdutoController().create);
routes.get('/products', new ProdutoController().findAll);
routes.get('/products/:id', new ProdutoController().findById);
routes.delete('/products/:id', new ProdutoController().delete);


export default routes;