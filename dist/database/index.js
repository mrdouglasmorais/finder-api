"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _Brand = require('../app/models/Brand'); var _Brand2 = _interopRequireDefault(_Brand);
var _Condition = require('../app/models/Condition'); var _Condition2 = _interopRequireDefault(_Condition);
var _Color = require('../app/models/Color'); var _Color2 = _interopRequireDefault(_Color);
var _Locale = require('../app/models/Locale'); var _Locale2 = _interopRequireDefault(_Locale);
var _Transmission = require('../app/models/Transmission'); var _Transmission2 = _interopRequireDefault(_Transmission);
var _Cartype = require('../app/models/Cartype'); var _Cartype2 = _interopRequireDefault(_Cartype);
var _Carmodel = require('../app/models/Carmodel'); var _Carmodel2 = _interopRequireDefault(_Carmodel);
var _Mileage = require('../app/models/Mileage'); var _Mileage2 = _interopRequireDefault(_Mileage);
var _Fuel = require('../app/models/Fuel'); var _Fuel2 = _interopRequireDefault(_Fuel);
var _Additional = require('../app/models/Additional'); var _Additional2 = _interopRequireDefault(_Additional);
var _Adverts = require('../app/models/Adverts'); var _Adverts2 = _interopRequireDefault(_Adverts);
var _Carphoto = require('../app/models/Carphoto'); var _Carphoto2 = _interopRequireDefault(_Carphoto);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

const models = [ 
  _Brand2.default, 
  _Condition2.default, 
  _Color2.default, 
  _Locale2.default, 
  _Transmission2.default,
  _Cartype2.default,
  _Carmodel2.default,
  _Mileage2.default,
  _Fuel2.default,
  _Additional2.default,
  _Adverts2.default,
  _Carphoto2.default
];

class Database{
  constructor(){
    this.init()
  }

  init(){
    this.connection = new (0, _sequelize2.default)(_database2.default);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

exports. default = new Database();