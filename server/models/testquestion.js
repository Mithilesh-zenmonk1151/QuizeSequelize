"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class testQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.test, { foreignKey: "testId", targetKey: "id" });
      // this.belongsTo(models.question, {
      //   foreignKey: "questionId",
      //   targetKey: "id",
      // });
      // this.hasMany(models.response, {
      //   foreignKey: "testQuestionId",
      //   sourceKey: "id",
      // });
    }
  }
  testQuestion.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      optional: { type: DataTypes.BOOLEAN, allowNull: false },
      testId: { type: DataTypes.UUID, allowNull: false },
      questionId: { type: DataTypes.UUID, allowNull: false },
    },
    {
      sequelize,
      modelName: "testQuestion",
    }
  );
  return testQuestion;
};
