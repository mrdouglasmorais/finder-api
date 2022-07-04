"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Carmodel = require('../models/Carmodel'); var _Carmodel2 = _interopRequireDefault(_Carmodel);

class CarModelController {
  async store(req, res){
    const {id, value} = await _Carmodel2.default.create(req.body)
    return res.json({
      id,
      value
    })
  }

  async index(req, res){
    const allModels = await _Carmodel2.default.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allModels)
  }
}

exports. default = new CarModelController();