import Sequelize from "sequelize";

import Brand from '../app/models/Brand';
import databaseConfig from '../config/database';

const models = [ Brand ];

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