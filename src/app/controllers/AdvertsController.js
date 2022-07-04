import Adverts from '../models/Adverts';

class AdvertsController{
  async store(req, res){
    const { 
      id, 
      model, 
      version, 
      condition, 
      certifield, 
      location, 
      brand, 
      year, 
      price, 
      description, 
      mileage, 
      cartype, 
      color, 
      photosm, 
      fuel } = await Adverts.create(req.body)
    return res.json({
      id, 
      model, 
      version, 
      condition, 
      certifield, 
      location, 
      brand, 
      year, 
      price, 
      description, 
      mileage, 
      cartype, 
      color, 
      photosm, 
      fuel
    })
  }
  async index(req, res){
    console.log(req.query)
    return res.json({
      message: "OK"
    })
  }
}

export default new AdvertsController();