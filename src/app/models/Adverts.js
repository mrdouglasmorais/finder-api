import Sequelize, { Model } from 'sequelize';

class Adverts extends Model {
  static init(sequelize) {
    super.init({
      model: Sequelize.STRING,
      version: Sequelize.STRING,
      certifield: Sequelize.BOOLEAN,
      price: Sequelize.FLOAT,
      year: Sequelize.INTEGER,
      description: Sequelize.STRING,
    }, 
    {  
      sequelize, 
    });
    return this;
  }
  static associate(models){
    this.belongsTo( models.Brand, { foreignKey: 'id_brand', as: 'brand'})
    this.belongsTo( models.Condition, { foreignKey: 'id_condition', as: 'condition'})
    this.belongsTo( models.Locale, { foreignKey: 'id_location', as: 'location'})
    this.belongsTo( models.Mileage, { foreignKey: 'id_mileage', as: 'mileage'})
    this.belongsTo( models.Cartype, { foreignKey: 'id_cartype', as: 'cartype'})
    this.belongsTo( models.Color, { foreignKey: 'id_color', as: 'color'})
    this.belongsTo( models.Carphoto, { foreignKey: 'id_photo', as: 'photos'})
    this.belongsTo( models.Additional, { foreignKey: 'id_additional', as: 'additional'})
  }
}

export default Adverts