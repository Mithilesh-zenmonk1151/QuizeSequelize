"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.testQuestion, {
        foreignKey: "questionId",
        sourceKey: "id",
      });
      this.hasMany(models.response, {
        foreignKey: "questionId",
        sourceKey: "id",
      });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  questions.init(
    {
      id:{
        type: DataTypes.INTEGER,
        // allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      uuid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      title:{ type: DataTypes.STRING,  },
      correctOption:{ type: DataTypes.STRING, },
      weightage:{ type: DataTypes.INTEGER, },
     
      option1:{
        type: DataTypes.STRING,
        // allowNull: false,
      },
      option2:{
        type: DataTypes.STRING,
        // allowNull: false,
      },
      option3:{
        type: DataTypes.STRING,
        // allowNull: false,
      },
      option4:{
        type: DataTypes.STRING,
        // allowNull: false,
      },
      testId:{
        type:DataTypes.STRING,
      }
    },
    {
      sequelize,
      modelName: "questions",
    }
  );
  return questions;
};
