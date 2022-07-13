"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Adverts extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      model: _sequelize2.default.STRING,
      version: _sequelize2.default.STRING,
      certifield: _sequelize2.default.BOOLEAN,
      price: _sequelize2.default.FLOAT,
      year: _sequelize2.default.INTEGER,
      kilometers: _sequelize2.default.STRING,
      description: _sequelize2.default.STRING,
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

exports. default = Adverts