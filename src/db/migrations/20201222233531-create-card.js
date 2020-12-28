'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      boardId: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      startDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      endDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      file: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cover: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    },
    {
        charset: 'utf8'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cards');
  }
};