"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Adverts = require('../models/Adverts'); var _Adverts2 = _interopRequireDefault(_Adverts);
var _Brand = require('../models/Brand'); var _Brand2 = _interopRequireDefault(_Brand);
var _Cartype = require('../models/Cartype'); var _Cartype2 = _interopRequireDefault(_Cartype);
var _Condition = require('../models/Condition'); var _Condition2 = _interopRequireDefault(_Condition);
var _Locale = require('../models/Locale'); var _Locale2 = _interopRequireDefault(_Locale);
var _Mileage = require('../models/Mileage'); var _Mileage2 = _interopRequireDefault(_Mileage);

var _Color = require('../models/Color'); var _Color2 = _interopRequireDefault(_Color);
var _Fuel = require('../models/Fuel'); var _Fuel2 = _interopRequireDefault(_Fuel);
var _Carphoto = require('../models/Carphoto'); var _Carphoto2 = _interopRequireDefault(_Carphoto);
var _Additional = require('../models/Additional'); var _Additional2 = _interopRequireDefault(_Additional);

class AdvertsController{
  async store(req, res){
    const { 
      id, 
      model, 
      version, 
      condition, 
      certifield, 
      location, 
      brand, 
      year, 
      price, 
      description, 
      mileage, 
      cartype,
      kilometers, 
      color, 
      photos, 
      fuel } = await _Adverts2.default.create(req.body);

    return res.json({
      id, 
      model, 
      version, 
      condition, 
      certifield, 
      location, 
      brand, 
      year, 
      price, 
      description, 
      mileage, 
      cartype, 
      color,
      kilometers, 
      photos, 
      fuel
    })
  }
  async index(req, res){
    try {
      const { page = 1 } = req.query;
      const dataContent = req.query;
      delete dataContent.page;
      const returnData = await _Adverts2.default.findAll({
        where: dataContent,
        order: ['created_at'],
        include: [
          {
            model: _Condition2.default,
            as: 'condition',
            attributes: ['id']
          },
          {
            model: _Brand2.default,
            as: 'brand',
            attributes: ['id']
          },
          {
            model: _Locale2.default,
            as: 'location',
            attributes: ['id']
          },
          {
            model: _Mileage2.default,
            as: 'mileage',
            attributes: ['id']
          },
          {
            model: _Cartype2.default,
            as: 'cartype',
            attributes: ['id']
          },
          {
            model: _Color2.default,
            as: 'color',
            attributes: ['id']
          },
          {
            model: _Fuel2.default,
            as: 'fuel',
            attributes: ['id']
          },
          {
            model: _Carphoto2.default,
            as: 'photos',
            attributes: ['id', 'value']
          },
          {
            model: _Additional2.default,
            as: 'additional',
            attributes: ['id']
          },
        ]
      })

      return res.json({
        page,
        resultsFor: returnData.length,
        totalPages: (returnData.length / 20 + 1).toFixed(),
        results: returnData
      })
      
    } catch (error) {
      return res.status(400).json({
        message: "Error API"
      })
    }
  }
}

exports. default = new AdvertsController();