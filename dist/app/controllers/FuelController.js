"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Fuel = require('../models/Fuel'); var _Fuel2 = _interopRequireDefault(_Fuel);

class FuelController {
  async store(req, res){
    const data = await _Fuel2.default.create(req.body)
    return res.json(data)
  }

  async index(req, res){
    const allColors = await _Fuel2.default.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allColors)
  }
}

exports. default = new FuelController();