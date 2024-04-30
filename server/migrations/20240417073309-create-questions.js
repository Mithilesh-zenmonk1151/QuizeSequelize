'use strict';
/** @type {import('sequelize-cli').Migration} */
const {Model}= require("sequelize")
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questions', {
      id: {
        // allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      title: {
        type: Sequelize.STRING,
        // allowNull:false
      },
      option1: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      option2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      option3: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      option4: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      correctOption: {
        type: Sequelize.STRING,
        // allowNull:false
      },
      weightage: {
        type: Sequelize.INTEGER,
        // allowNull:false
      },
      testId:{
        type:Sequelize.STRING

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