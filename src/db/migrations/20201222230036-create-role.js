'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('roles', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER.UNSIGNED
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        code: {
            allowNull: false,
            type: Sequelize.STRING
        },
        createAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updateAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        deleteAt: {
            allowNull: true,
            type: Sequelize.DATE
        }
    },
    {
        charset: 'utf8'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('roles');
  }
};