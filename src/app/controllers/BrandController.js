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
    return res.json({
      message: 'Okay'
    })

  }
}

export default new BradsController();