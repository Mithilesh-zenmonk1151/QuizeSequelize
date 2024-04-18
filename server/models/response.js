"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.testQuestion, {
        foreignKey: "testQuestionId",
        targetKey: "id",
      });
    }
  }
  response.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      response: { type: DataTypes.STRING, allowNull: false },
      questionMarks: { type: DataTypes.INTEGER, allowNull: false },
      correct: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "response",
    }
  );
  return response;
};
