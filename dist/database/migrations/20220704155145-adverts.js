"use strict";'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('adverts', {
      // table content
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('adverts');
  }
};
