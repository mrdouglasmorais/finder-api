"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Condition = require('../models/Condition'); var _Condition2 = _interopRequireDefault(_Condition);

class ConditionController {
  async store(req, res){
    const {id, value } = await _Condition2.default.create(req.body)
    return res.json({
      id,
      value
    })
  }

  async index(req, res){
    const allConditions = await _Condition2.default.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allConditions)
  }
}

exports. default = new ConditionController();