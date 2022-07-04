"use strict";'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('createcarphotos', {
      // table
    })
  },

  down: queryInterface => {
    queryInterface.dropTable('createcarphotos');
  }
};
