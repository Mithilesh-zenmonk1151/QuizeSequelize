"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      this.hasMany(models.questions, {
        foreignKey: "testId",
        sourceKey: "id",
      });
    }
  }
  test.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      totalNumberOfQuestions: { type: DataTypes.INTEGER, allowNull: false },
      totalMarks: { type: DataTypes.INTEGER, allowNull: false },
      instructions: { type: DataTypes.STRING, allowNull: false },
      duration: { type: DataTypes.TIME, allowNull: false },
    },
    {
      sequelize,
      modelName: "test",
    }
  );
  return test;
};
