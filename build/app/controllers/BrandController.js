"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Brand = require('../models/Brand'); var _Brand2 = _interopRequireDefault(_Brand);

class BradsController {
  async store(req, res){
    const {id, name, logo} = await _Brand2.default.create(req.body)
    return res.json({
      id,
      name,
      logo
    })
  }

  async index(req, res){
    return res.json({
      message: 'Okay'
    })

  }
}

exports. default = new BradsController();