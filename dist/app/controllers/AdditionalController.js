"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Additional = require('../models/Additional'); var _Additional2 = _interopRequireDefault(_Additional);

class AdditionalController {
  async store(req, res){
    const {id, model, version, cerifield, price, year} = await _Additional2.default.create(req.body)
    return res.json({
      id, 
      model, 
      version, 
      cerifield, 
      price, 
      year
    })
  }

  async index(req, res){
    const allAdverts = await _Additional2.default.findAll({
      attributes: ['id', 'model', 'certifield', 'price', 'year', 'description']
    })
    return res.json(allAdverts)
  }
}

exports. default = new AdditionalController();