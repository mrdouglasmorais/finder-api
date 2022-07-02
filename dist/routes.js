"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

// controllers
var _BrandController = require('./app/controllers/BrandController'); var _BrandController2 = _interopRequireDefault(_BrandController);


// swagger
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);
var _swagger = require('../swagger'); var _swagger2 = _interopRequireDefault(_swagger);

const routes = new (0, _express.Router)();

routes.use('/swagger', _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup(_swagger2.default));

routes.get('/', (req, res) => {
  res.json({
    message: `Tudo certo com os trem ${process.env.DB_HOST}`
  })
});

routes.get('/brands', _BrandController2.default.index);

routes.get('/condition', _BrandController2.default.index);

routes.get('/colors', _BrandController2.default.index);

routes.get('/cartype', _BrandController2.default.index);

routes.get('/transmission', _BrandController2.default.index);

routes.get('/locale', _BrandController2.default.index);

routes.get('/car_models', _BrandController2.default.index);

routes.get('/adverts', _BrandController2.default.index);

exports. default = routes;