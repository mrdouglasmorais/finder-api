import Sequelize, { Model } from 'sequelize';

class Mileage extends Model {
  static init(sequelize) {
    super.init({
      value: Sequelize.STRING
    }, 
    {  
      sequelize, 
    });
    return this;
  }
}

export default Mileage