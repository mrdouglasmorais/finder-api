"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Additional = require('../models/Additional'); var _Additional2 = _interopRequireDefault(_Additional);

class AdditionalController {
  async store(req, res){
    const {id, value} = await _Additional2.default.create(req.body)
    return res.json({
      id,
      value
    })
  }

  async index(req, res){
    const allAdditionals = await _Additional2.default.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allAdditionals)
  }
}

exports. default = new AdditionalController();