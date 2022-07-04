"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Carphoto = require('../models/Carphoto'); var _Carphoto2 = _interopRequireDefault(_Carphoto);

class CarPhotosController {
  async store(req, res){
    const {id, value} = await _Carphoto2.default.create(req.body)
    return res.json({
      id,
      value
    })
  }

  async index(req, res){
    const allPhotos = await _Carphoto2.default.findAll({
      attributes: ['value']
    })
    return res.json(allPhotos)
  }
}

exports. default = new CarPhotosController();