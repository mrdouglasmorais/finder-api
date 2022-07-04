import Carmodel from '../models/Carmodel';

class CarModelController {
  async store(req, res){
    const {id, value} = await Carmodel.create(req.body)
    return res.json({
      id,
      value
    })
  }

  async index(req, res){
    const allModels = await Carmodel.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allModels)
  }
}

export default new CarModelController();