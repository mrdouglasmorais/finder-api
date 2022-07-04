import Fuel from '../models/Fuel';

class FuelController {
  async store(req, res){
    const data = await Fuel.create(req.body)
    return res.json(data)
  }

  async index(req, res){
    const allColors = await Fuel.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allColors)
  }
}

export default new FuelController();