"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Adverts = require('../models/Adverts'); var _Adverts2 = _interopRequireDefault(_Adverts);

class AdvertsController{
  store(req, res){
    console.log(req.query)
    return res.json({
      message: "Okay"
    })
  }
  index(req, res){
    console.log(req.query)
    return res.json({
      message: "OK"
    })
  }
}

exports. default = new AdvertsController();