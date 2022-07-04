'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('createcaradditionals', {
      // table content
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('createcaradditionals')
  }
};
