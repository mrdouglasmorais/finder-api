import Locale from '../models/Locale';

class LocaleController {
  async store(req, res){
    const data = await Locale.create(req.body)
    return res.json(data)
  }

  async index(req, res){
    const allColors = await Locale.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allColors)
  }
}

export default new LocaleController();