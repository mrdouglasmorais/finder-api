"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

// controllers
var _BrandController = require('./app/controllers/BrandController'); var _BrandController2 = _interopRequireDefault(_BrandController);
var _ConditionController = require('./app/controllers/ConditionController'); var _ConditionController2 = _interopRequireDefault(_ConditionController);
var _ColorController = require('./app/controllers/ColorController'); var _ColorController2 = _interopRequireDefault(_ColorController);
var _LocaleController = require('./app/controllers/LocaleController'); var _LocaleController2 = _interopRequireDefault(_LocaleController);
var _TransmissionController = require('./app/controllers/TransmissionController'); var _TransmissionController2 = _interopRequireDefault(_TransmissionController);
var _CartypeController = require('./app/controllers/CartypeController'); var _CartypeController2 = _interopRequireDefault(_CartypeController);
var _CarModelControllers = require('./app/controllers/CarModelControllers'); var _CarModelControllers2 = _interopRequireDefault(_CarModelControllers);
var _MileageController = require('./app/controllers/MileageController'); var _MileageController2 = _interopRequireDefault(_MileageController);
var _FuelController = require('./app/controllers/FuelController'); var _FuelController2 = _interopRequireDefault(_FuelController);
var _AdditionalController = require('./app/controllers/AdditionalController'); var _AdditionalController2 = _interopRequireDefault(_AdditionalController);
// import CarPhotosController from './app/controllers/CarPhotosController';
var _AdvertsController = require('./app/controllers/AdvertsController'); var _AdvertsController2 = _interopRequireDefault(_AdvertsController);

// swagger
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);
var _swagger = require('../swagger'); var _swagger2 = _interopRequireDefault(_swagger);

const routes = new (0, _express.Router)();

// Swagger Route
routes.use('/swagger', _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup(_swagger2.default));

routes.get('/', (req, res) => {
  return res.json({
    message: "Okay"
  })
})

// Brands
routes.post('/brands', _BrandController2.default.store);
routes.get('/brands', _BrandController2.default.index);

// Conditions
routes.post('/condition', _ConditionController2.default.store);
routes.get('/condition', _ConditionController2.default.index);

// Collors
routes.post('/colors', _ColorController2.default.store);
routes.get('/colors', _ColorController2.default.index);

// Cartypes
routes.post('/cartype', _CartypeController2.default.store);
routes.get('/cartype', _CartypeController2.default.index);

// Transmissions
routes.post('/transmission', _TransmissionController2.default.store);
routes.get('/transmission', _TransmissionController2.default.index);

// Locales
routes.post('/locale', _LocaleController2.default.store);
routes.get('/locale', _LocaleController2.default.index);

// Car Models
routes.post('/carmodels', _CarModelControllers2.default.store);
routes.get('/carmodels', _CarModelControllers2.default.index);

// Mileage
routes.post('/mileage', _MileageController2.default.store);
routes.get('/mileage', _MileageController2.default.index);

// fuel
routes.post('/fuel', _FuelController2.default.store);
routes.get('/fuel', _FuelController2.default.index);

// Additionals
routes.post('/additional', _AdditionalController2.default.store);
routes.get('/additional', _AdditionalController2.default.index);

// Carphotos
// routes.post('/photos', CarPhotosController.store);
// routes.get('/photos', CarPhotosController.index);

// Adverts
routes.post('/adverts', _AdvertsController2.default.store);
routes.get('/adverts', _AdvertsController2.default.index);

exports. default = routes;