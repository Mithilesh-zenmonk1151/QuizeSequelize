const CustomError = require("../libs/error");
const { test, question, testQuestion } = require("../models");
const { user } = require("../models");
const { roleEnum } = require("../libs/constants");

exports.addQuestions = async (payload) => {
  try {
    const { userId } = payload.body;
    console.log("UserIDD", userId);
    const userData = await user.findOne({ where: { id: userId } });
    if (!userData) throw new CustomError("User not found", 400);
    const { title, options, weightage, testId, correctOption } = payload.body;
    console.log("title", title);
    if (userData.role === roleEnum.Student)
      throw new CustomError("Not allowed", 401);
    const response = await question.create({
      title: title,
      correctOption: correctOption,
      options: options,

      weightage: Number(weightage),
    });
    if (!response) throw new CustomError("Question not created", 500);
    if (testId) {
      const testData = await test.findOne({ where: { id: testId } });
      console.log("test details", testData);
      const relation = await testQuestion.create({
        testId: testData.id,
        questionId: response.dataValues.id,
      });
      if (!relation) throw new CustomError("Through table not created", 500);
    }
    return response;
  } catch (error) {
    throw error;
  }
};
exports.fetchQuestions = async (payload) => {
  const { id } = payload.params;
  if (!id) throw new CustomError("details not found", 404);
  if (id == -1) {
    const response = await question.findAll();
    if (!response) throw new CustomError("Questions not found", 404);
    if (response.length === 0) throw new CustomError("No questions", 204);
    return response;
  }
  const test_data = await test.findOne({ where: { uuid: id } });
  console.log("test details cdd", test_data.id);
  const response = await test_question.findAll({
    where: { testId: test_data.id },
    include: "question",
  });
  console.log("getting questions related to test response: ", response);
  if (!response) throw new CustomError("Questions not found", 404);
  if (response.length === 0) throw new CustomError("No questions", 204);
  return response;
};
exports.updateQuestions = async (payload) => {
  try {
    const { questionId } = payload.params;
    if (!questionId) {
      throw new CustomError("Question doesn't exists ", 404);
    }
    const updateQues = await question.create({ where: { uuid: questionId } });
    const { title, correctOption, weightage, options } = payload.body;
    await updateQues({
      title: title,
      correctOption: correctOption,
      weightage: weightage,
      options: options,
    });
    await updateQues.save();
    return updateQues;
  } catch (error) {
    throw error;
  }
};
