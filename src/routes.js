import { Router } from 'express';

// controllers
import BrandController from './app/controllers/BrandController';
import ConditionController from './app/controllers/ConditionController';
import ColorController from './app/controllers/ColorController';
import LocaleController from './app/controllers/LocaleController';
import TransmissionController from './app/controllers/TransmissionController';
import CartypeController from './app/controllers/CartypeController';
import CarModelController from './app/controllers/CarModelControllers';
import MileageController from './app/controllers/MileageController';
import FuelController from './app/controllers/FuelController';
import AdditionalController from './app/controllers/AdditionalController';
// import CarPhotosController from './app/controllers/CarPhotosController';
import AdvertsController from './app/controllers/AdvertsController';

// swagger
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger';

const routes = new Router();

// Swagger Route
routes.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

routes.get('/', (req, res) => {
  return res.json({
    message: "Okay"
  })
})

// Brands
routes.post('/brands', BrandController.store);
routes.get('/brands', BrandController.index);

// Conditions
routes.post('/condition', ConditionController.store);
routes.get('/condition', ConditionController.index);

// Collors
routes.post('/colors', ColorController.store);
routes.get('/colors', ColorController.index);

// Cartypes
routes.post('/cartype', CartypeController.store);
routes.get('/cartype', CartypeController.index);

// Transmissions
routes.post('/transmission', TransmissionController.store);
routes.get('/transmission', TransmissionController.index);

// Locales
routes.post('/locale', LocaleController.store);
routes.get('/locale', LocaleController.index);

// Car Models
routes.post('/carmodels', CarModelController.store);
routes.get('/carmodels', CarModelController.index);

// Mileage
routes.post('/mileage', MileageController.store);
routes.get('/mileage', MileageController.index);

// fuel
routes.post('/fuel', FuelController.store);
routes.get('/fuel', FuelController.index);

// Additionals
routes.post('/additional', AdditionalController.store);
routes.get('/additional', AdditionalController.index);

// Carphotos
// routes.post('/photos', CarPhotosController.store);
// routes.get('/photos', CarPhotosController.index);

// Adverts
routes.post('/adverts', AdvertsController.store);
routes.get('/adverts', AdvertsController.index);

export default routes;