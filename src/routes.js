import { Router } from 'express';

// controllers
import BrandController from './app/controllers/BrandController';


// swagger
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger';

const routes = new Router();

routes.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

routes.get('/', (req, res) => {
  res.json({
    message: `Tudo certo com os trem ${process.env.DB_HOST}`
  })
});

routes.get('/brands', BrandController.index);

routes.get('/condition', BrandController.index);

routes.get('/colors', BrandController.index);

routes.get('/cartype', BrandController.index);

routes.get('/transmission', BrandController.index);

routes.get('/locale', BrandController.index);

routes.get('/car_models', BrandController.index);

routes.get('/adverts', BrandController.index);

export default routes;