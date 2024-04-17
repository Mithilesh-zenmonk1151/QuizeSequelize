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
      name: DataTypes.STRING,
      totalNumberOfQuestions: DataTypes.INTEGER,
      totalMarks: DataTypes.INTEGER,
      instructions: DataTypes.STRING,
      duration: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "test",
    }
  );
  return test;
};
