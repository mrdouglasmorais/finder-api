import { Router } from 'express';

// controllers
import BrandController from './app/controllers/BrandController';


// swagger
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger';

const routes = new Router();

// Swagger Route
routes.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

routes.get('/', (req, res) => {
  return res.json({
    message: 'operation API'
  })
})

// Brands
routes.post('/brands', BrandController.store);
routes.get('/brands', BrandController.index);

// Conditions
routes.get('/condition', BrandController.index);

// Collors
routes.get('/colors', BrandController.index);

// Cartypes
routes.get('/cartype', BrandController.index);

// Transmissions
routes.get('/transmission', BrandController.index);

// Locales
routes.get('/locale', BrandController.index);

// Car Models
routes.get('/car_models', BrandController.index);

// Adverts
routes.get('/adverts', BrandController.index);

export default routes;