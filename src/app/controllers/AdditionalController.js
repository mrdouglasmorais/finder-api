import Additional from '../models/Additional';

class AdditionalController {
  async store(req, res){
    const {id, value} = await Additional.create(req.body)
    return res.json({
      id,
      value
    })
  }

  async index(req, res){
    const allAdditionals = await Additional.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allAdditionals)
  }
}

export default new AdditionalController();