import Sequelize, { Model } from 'sequelize';

class Brand extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.VIRTUAL
    }, 
    {  
      sequelize, 
    });
    return this;
  }
}

export default Brand