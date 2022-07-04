import Additional from '../models/Additional';

class AdditionalController {
  async store(req, res){
    const {id, model, version, cerifield, price, year} = await Additional.create(req.body)
    return res.json({
      id, 
      model, 
      version, 
      cerifield, 
      price, 
      year
    })
  }

  async index(req, res){
    const allAdverts = await Additional.findAll({
      attributes: ['id', 'model', 'certifield', 'price', 'year', 'description']
    })
    return res.json(allAdverts)
  }
}

export default new AdditionalController();