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
      color, 
      photosm, 
      fuel } = await _Adverts2.default.create(req.body)
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
      photosm, 
      fuel
    })
  }
  async index(req, res){
    const { page = 1 } = req.query;
    const { 
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
      photosm, 
      fuel
    } = req.query

    if(req.query.model){
      const returnData = await _Adverts2.default.findAll({
        where: {},
        order: ['created_at'],
        limit: 20,
        offset: (page - 1) * 20,
        include: [
          {
            model: _Brand2.default,
            as: 'brand',
            attributes: ['name']
          },
          {
            model: _Condition2.default,
            as: 'condition',
            attributes: ['value']
          },
          {
            model: _Locale2.default,
            as: 'location',
            attributes: ['value']
          },
          {
            model: _Mileage2.default,
            as: 'mileage',
            attributes: ['value']
          },
          {
            model: _Cartype2.default,
            as: 'cartype',
            attributes: ['value']
          },
          {
            model: _Color2.default,
            as: 'color',
            attributes: ['value']
          },
          {
            model: _Fuel2.default,
            as: 'fuel',
            attributes: ['value']
          },
          {
            model: _Carphoto2.default,
            as: 'photos',
            attributes: ['value']
          },
          {
            model: _Additional2.default,
            as: 'additional',
            attributes: ['value']
          },
        ]
      })
      return res.json({
        page,
        results: returnData

      })
    }
    return res.json({
      message: "OK"
    })
  }
}

exports. default = new AdvertsController();