import Sequelize, { Model } from 'sequelize';

class Adverts extends Model {
  static init(sequelize) {
    super.init({
      model: Sequelize.STRING,
      version: Sequelize.STRING,
      certifield: Sequelize.BOOLEAN,
      price: Sequelize.FLOAT,
      year: Sequelize.INTEGER,
      kilometers: Sequelize.STRING,
      description: Sequelize.STRING,
    }, 
    {  
      sequelize, 
    });
    return this;
  }
  static associate(models){
    this.belongsTo( models.Brand, { foreignKey: 'id', as: 'brand'})
    this.belongsTo( models.Condition, { foreignKey: 'id', as: 'condition'})
    this.belongsTo( models.Locale, { foreignKey: 'id', as: 'location'})
    this.belongsTo( models.Mileage, { foreignKey: 'id', as: 'mileage'})
    this.belongsTo( models.Cartype, { foreignKey: 'id', as: 'cartype'})
    this.belongsTo( models.Color, { foreignKey: 'id', as: 'color'})
    this.belongsTo( models.Fuel, { foreignKey: 'id', as: 'fuel'})
    this.belongsTo( models.Carphoto, { foreignKey: 'id', as: 'photos'})
    this.belongsTo( models.Additional, { foreignKey: 'id', as: 'additional'})
  }
}

export default Adverts