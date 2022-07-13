"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Color = require('../models/Color'); var _Color2 = _interopRequireDefault(_Color);

class ColorController {
  async store(req, res){
    const data = await _Color2.default.create(req.body)
    return res.json(data)
  }

  async index(req, res){
    const allColors = await _Color2.default.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allColors)
  }
}

exports. default = new ColorController();