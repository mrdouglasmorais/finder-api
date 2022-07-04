import Transmission from '../models/Transmission';

class TransmissionController {
  async store(req, res){
    console.log('resposta', req.body)
    const data = await Transmission.create(req.body)
    return res.json(data)
  }

  async index(req, res){
    const allTransmissions = await Transmission.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allTransmissions)
  }
}

export default new TransmissionController();