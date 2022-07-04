import Adverts from '../models/Adverts';
import Brand from '../models/Brand';
import Cartype from '../models/Cartype';
import Condition from '../models/Condition';
import Locale from '../models/Locale';
import Mileage from '../models/Mileage';
import Cartype from '../models/Cartype';
import Color from '../models/Color';
import Fuel from '../models/Fuel';
import Carphoto from '../models/Carphoto';
import Additional from '../models/Additional';

class AdvertsController{
  async store(req, res){
    const { 
      id, 
      model, 
      version, 
      condition, 
      certifield, 
      location, 
      brand, 
      year, 
      price, 
      description, 
      mileage, 
      cartype, 
      color, 
      photosm, 
      fuel } = await Adverts.create(req.body)
    return res.json({
      id, 
      model, 
      version, 
      condition, 
      certifield, 
      location, 
      brand, 
      year, 
      price, 
      description, 
      mileage, 
      cartype, 
      color, 
      photosm, 
      fuel
    })
  }
  async index(req, res){
    const { page = 1 } = req.query;
    const { 
      model, 
      version, 
      condition, 
      certifield, 
      location, 
      brand, 
      year, 
      price, 
      description, 
      mileage, 
      cartype, 
      color, 
      photosm, 
      fuel
    } = req.query

    if(req.query.model){
      const returnData = await Adverts.findAll({
        where: {},
        order: ['created_at'],
        limit: 20,
        offset: (page - 1) * 20,
        include: [
          {
            model: Brand,
            as: 'brand',
            attributes: ['name']
          },
          {
            model: Condition,
            as: 'condition',
            attributes: ['value']
          },
          {
            model: Locale,
            as: 'location',
            attributes: ['value']
          },
          {
            model: Mileage,
            as: 'mileage',
            attributes: ['value']
          },
          {
            model: Cartype,
            as: 'cartype',
            attributes: ['value']
          },
          {
            model: Color,
            as: 'color',
            attributes: ['value']
          },
          {
            model: Fuel,
            as: 'fuel',
            attributes: ['value']
          },
          {
            model: Carphoto,
            as: 'photos',
            attributes: ['value']
          },
          {
            model: Additional,
            as: 'additional',
            attributes: ['value']
          },
        ]
      })
      return res.json({
        page,
        results: returnData

      })
    }
    return res.json({
      message: "OK"
    })
  }
}

export default new AdvertsController();