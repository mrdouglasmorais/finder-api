import Sequelize, { Model } from 'sequelize';

class Brand extends Model {
  static init(sequelize) {
    super.init({
      value: Sequelize.STRING,
      logo: Sequelize.STRING
    }, 
    {  
      sequelize, 
    });
    return this;
  }
}

export default Brand