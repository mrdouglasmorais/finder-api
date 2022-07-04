import Sequelize, { Model } from 'sequelize';

class Carphoto extends Model {
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

export default Carphoto