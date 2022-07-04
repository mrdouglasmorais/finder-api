import Condition from '../models/Condition';

class ConditionController {
  async store(req, res){
    const {id, value } = await Condition.create(req.body)
    return res.json({
      id,
      value
    })
  }

  async index(req, res){
    const allConditions = await Condition.findAll({
      attributes: ['id', 'value']
    })
    return res.json(allConditions)
  }
}

export default new ConditionController();