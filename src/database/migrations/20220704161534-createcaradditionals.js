'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'adverts',
      'additional_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'additionals', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      }
    )
  },

  down: async queryInterface => {
    return queryInterface.removeColumn('adverts', 'additional_id');
  }
};
