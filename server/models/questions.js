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
    toJSON(){
      return {...this.get(),id: undefined}
    }
  }
  questions.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      uuid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name:{ type:DataTypes.STRING,
      allowNull:false},
      correctOption:{type: DataTypes.STRING,
        allowNull:false},
      weightage:{type: DataTypes.INTEGER,
        allowNull:false},
      options: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "questions",
    }
  );
  return questions;
};
