import Mileage from '../models/Mileage';

class MileageController {
  async store(req, res){
    console.log('resposta', req.body)
    const data = await Mileage.create(req.body)
    return res.json(data)
  }

  async index(req, res){
    const allMilleage = await Mileage.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allMilleage)
  }
}

export default new MileageController();