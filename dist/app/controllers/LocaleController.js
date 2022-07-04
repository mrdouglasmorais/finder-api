"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Locale = require('../models/Locale'); var _Locale2 = _interopRequireDefault(_Locale);

class LocaleController {
  async store(req, res){
    const data = await _Locale2.default.create(req.body)
    return res.json(data)
  }

  async index(req, res){
    const allColors = await _Locale2.default.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allColors)
  }
}

exports. default = new LocaleController();