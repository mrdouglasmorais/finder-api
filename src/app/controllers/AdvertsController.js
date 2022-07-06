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
      kilometers, 
      color, 
      photos, 
      fuel } = await Adverts.create(req.body);

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
      kilometers, 
      photos, 
      fuel
    })
  }
  async index(req, res){
    try {
      const { page = 1 } = req.query;
      const dataContent = req.query;
      delete dataContent.page;
      const returnData = await Adverts.findAll({
        where: dataContent,
        order: ['created_at'],
        include: [
          {
            model: Condition,
            as: 'condition',
            attributes: ['id']
          },
          {
            model: Brand,
            as: 'brand',
            attributes: ['id']
          },
          {
            model: Locale,
            as: 'location',
            attributes: ['id']
          },
          {
            model: Mileage,
            as: 'mileage',
            attributes: ['id']
          },
          {
            model: Cartype,
            as: 'cartype',
            attributes: ['id']
          },
          {
            model: Color,
            as: 'color',
            attributes: ['id']
          },
          {
            model: Fuel,
            as: 'fuel',
            attributes: ['id']
          },
          {
            model: Carphoto,
            as: 'photos',
            attributes: ['id', 'value']
          },
          {
            model: Additional,
            as: 'additional',
            attributes: ['id']
          },
        ]
      })

      return res.json({
        page,
        resultsFor: returnData.length,
        totalPages: (returnData.length / 20 + 1).toFixed(),
        results: returnData
      })
      
    } catch (error) {
      return res.status(400).json({
        message: "Error API"
      })
    }
  }
}

export default new AdvertsController();