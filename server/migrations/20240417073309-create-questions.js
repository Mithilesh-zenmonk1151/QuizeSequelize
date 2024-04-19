'use strict';
/** @type {import('sequelize-cli').Migration} */
const {Model}= require("sequelize")
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      options: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      correctOption: {
        type: Sequelize.STRING,
        allowNull:false
      },
      weightage: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('questions');
  }
};