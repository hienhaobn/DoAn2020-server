'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_board', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      boardId: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      }
    },
    {
        charset: 'utf8'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_board');
  }
};