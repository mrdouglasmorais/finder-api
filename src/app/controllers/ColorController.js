import Color from '../models/Color';

class ColorController {
  async store(req, res){
    console.log('resposta', req.body)
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