import Sequelize from "sequelize";

import Brand from '../app/models/Brand';
import Condition from '../app/models/Condition';
import Color from '../app/models/Color';
import Locale from '../app/models/Locale';
import Transmission from '../app/models/Transmission';
import Cartype from '../app/models/Cartype';
import Carmodel from "../app/models/Carmodel";
import Mileage from '../app/models/Mileage';
import Fuel from '../app/models/Fuel';
import Additional from "../app/models/Additional";
import Adverts from "../app/models/Adverts";
import Carphoto from "../app/models/Carphoto";

import databaseConfig from '../config/database';

const models = [ 
  Brand, 
  Condition, 
  Color, 
  Locale, 
  Transmission,
  Cartype,
  Carmodel,
  Mileage,
  Fuel,
  Additional,
  Adverts,
  Carphoto
];

class Database{
  constructor(){
    this.init()
  }

  init(){
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

export default new Database();