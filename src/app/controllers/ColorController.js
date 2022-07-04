import Color from '../models/Color';

class ColorController {
  async store(req, res){
    const data = await Color.create(req.body)
    return res.json(data)
  }

  async index(req, res){
    const allColors = await Color.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allColors)
  }
}

export default new ColorController();