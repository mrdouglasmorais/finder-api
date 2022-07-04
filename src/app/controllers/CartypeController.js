import Cartype from '../models/Cartype';

class CartypeController {
  async store(req, res){
    const {id, value} = await Cartype.create(req.body)
    return res.json({
      id,
      value
    })
  }

  async index(req, res){
    const allTypes = await Cartype.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allTypes)
  }
}

export default new CartypeController();