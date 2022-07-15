"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Transmission = require('../models/Transmission'); var _Transmission2 = _interopRequireDefault(_Transmission);

class TransmissionController {
  async store(req, res){
    const data = await _Transmission2.default.create(req.body)
    return res.json(data)
  }

  async index(req, res){
    const allTransmissions = await _Transmission2.default.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allTransmissions)
  }
}

exports. default = new TransmissionController();