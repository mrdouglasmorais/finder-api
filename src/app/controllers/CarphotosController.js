import Carphoto from '../models/Carphoto';

class CarPhotosController {
  async store(req, res){
    const {id, value} = await Carphoto.create(req.body)
    return res.json({
      id,
      value
    })
  }

  async index(req, res){
    const allPhotos = await Carphoto.findAll({
      attributes: ['value']
    })
    return res.json(allPhotos)
  }
}

export default new CarPhotosController();