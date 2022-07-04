"use strict";Object.defineProperty(exports, "__esModule", {value: true});

class AdvertsController{
  store(req, res){
    return res.json({
      message: "Okay"
    })
  }
  index(req, res){
    return res.json({
      message: "OK"
    })
  }
}

exports. default = new AdvertsController();