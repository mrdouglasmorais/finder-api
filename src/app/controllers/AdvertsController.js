import Adverts from '../models/Adverts';

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

export default new AdvertsController();