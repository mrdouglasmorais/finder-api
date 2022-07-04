

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

export default new AdvertsController();