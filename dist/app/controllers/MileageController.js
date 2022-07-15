"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Mileage = require('../models/Mileage'); var _Mileage2 = _interopRequireDefault(_Mileage);

class MileageController {
  async store(req, res){
    const data = await _Mileage2.default.create(req.body)
    return res.json(data)
  }

  async index(req, res){
    const allMilleage = await _Mileage2.default.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allMilleage)
  }
}

exports. default = new MileageController();