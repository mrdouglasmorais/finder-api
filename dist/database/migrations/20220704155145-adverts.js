"use strict";'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('adverts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      version: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kilometers: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brand: {
        type: Sequelize.INTEGER,
        references: { model: 'brands', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      condition: {
        type: Sequelize.INTEGER,
        references: { model: 'conditions', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      certifield: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      location: {
        type: Sequelize.INTEGER,
        references: { model: 'locales', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mileage: {
        type: Sequelize.INTEGER,
        references: { model: 'mileages', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      cartype: {
        type: Sequelize.INTEGER,
        references: { model: 'cartypes', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      color: {
        type: Sequelize.INTEGER,
        references: { model: 'colors', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      fuel: {
        type: Sequelize.INTEGER,
        references: { model: 'fuel', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('adverts');
  }
};
