"use strict";'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'adverts',
      'photo_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'carphotos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      }
    )
  },

  down: async queryInterface => {
    return queryInterface.removeColumn('adverts', 'photo_id');
  }
};
