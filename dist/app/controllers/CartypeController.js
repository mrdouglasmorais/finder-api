"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Cartype = require('../models/Cartype'); var _Cartype2 = _interopRequireDefault(_Cartype);

class CartypeController {
  async store(req, res){
    const {id, value} = await _Cartype2.default.create(req.body)
    return res.json({
      id,
      value
    })
  }

  async index(req, res){
    const allTypes = await _Cartype2.default.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allTypes)
  }
}

exports. default = new CartypeController();