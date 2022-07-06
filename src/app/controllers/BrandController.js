import Brand from '../models/Brand';

class BradsController {
  async store(req, res){
    const {id, name, logo} = await Brand.create(req.body)
    return res.json({
      id,
      name,
      logo
    })
  }

  async index(req, res){
    const allBrands = await Brand.findAll({
      attributes: ['id', 'value', 'logo']
    })
    return res.json(allBrands)
  }
}

export default new BradsController();