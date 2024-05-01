// const CustomError = require("../libs/error");
// const { test,  testQuestion } = require("../models");
// const { user } = require("../models");
// const { roleEnum } = require("../libs/constants");
// const {question}=require("../models")
const { questions } = require("../models");

// exports.addQuestions = async (payload) => {
//   try {
// const { userId } = payload.body;
// console.log("UserIDD", userId);
// const userData = await user.findOne({ where: { id: userId } });
// if (!userData) throw new CustomError("User not found", 400);
// console.log("Payload.body", payload.body);
// console.log("title", title);
// if (userData.role === roleEnum.Student)
//   throw new CustomError("Not allowed", 401);
// const Quest= await question.create({
//   title: title,
//   correctOption: correctOption,
//   option1: option1,
//   option2:option2,
//   option3:option3,
//   option4:option4,

//   weightage: Number(weightage),
// });
// if (!response) throw new CustomError("Question not created", 500);
// if (testId) {
//   const testData = await test.findOne({ where: { id: testId } });
//   console.log("test details", testData);
//   const relation = await testQuestion.create({
//     testId: testData.id,
//     questionId: response.dataValues.id,
//   });
//   if (!relation) throw new CustomError("Through table not created", 500);
// }
//   // response.save();
//   return Quest;
// } catch (error) {
//   throw error;
// }
// };
exports.fetchQuestions = async (payload) => {
  console.log("PAYLOAD++", payload);
  const testId = payload.body;
  console.log("payload.body", payload.body);
  console.log("TTTTTEEEEEEESSSSSSSSSTTTTTIIID=======================", testId);
  // if (!testId) throw new CustomError("details not found", 404);
  // if (testId == -1) {
  //   const response = await questions.findAll();
  //   if (!response) throw new CustomError("Questions not found", 404);
  //   if (response.length === 0) throw new CustomError("No questions", 204);
  //   return response;
  // }
  // const testData = await test.findOne({ where: { testId: testId } });
  // console.log("test details cdd", testData.uuid);
  const response = await questions.findAll({
    where: { testId: testId },
  });
  console.log("getting questions related to test response: ", response);
  if (!response) throw new CustomError("Questions not found", 404);
  if (response.length === 0) throw new CustomError("No questions", 204);
  return response;
};
// exports.updateQuestions = async (payload) => {
//   try {
//     const { questionId } = payload.params;
//     if (!questionId) {
//       throw new CustomError("Question doesn't exists ", 404);
//     }
//     const updateQues = await question.create({ where: { uuid: questionId } });
//     const { title, correctOption, weightage, options } = payload.body;
//     await updateQues({
//       title: title,
//       correctOption: correctOption,
//       weightage: weightage,
//       options: options,
//     });
//     await updateQues.save();
//     return updateQues;
//   } catch (error) {
//     throw error;
//   }
// };
const CustomError = require("../libs/error");
exports.createQuestion = async (payload) => {
  try {
    // const { title, option1,option2,option3,option4, weightage, testId, correctOption } = payload.body;

    const {
      title,
      correctOption,
      weightage,
      option1,
      option2,
      option3,
      option4,
      testId,
    } = payload.body;
    console.log("PAAAAYLLLOAD.BBODDY", payload.body);
    try {
      const Quest = await questions.create({
        title: title,
        correctOption: correctOption,
        weightage: weightage,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        testId: testId,
      });
      console.log("Question s sabsksjc", Quest);
      return Quest;
    } catch (error) {
      console.log("question error", error);
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
exports.getTests = async (payload) => {
  try {
    const response = await test.findAll();
    return response;
  } catch (error) {
    throw error;
  }
};
exports.updateTes = async (payload) => {
  try {
    const { id } = payload.params;
    const { userId } = payload.body;
    const { name, totalNumberOfQuestions, totalMarks, instructions, duration } =
      payload.body;
    const Test = await test.update(
      { id: id },
      {
        name: name,
        totalNumberOfQuestions: totalNumberOfQuestions,
        totalMarks: totalMarks,
        instructions: instructions,
        duration: duration,
      }
    );
    if (userId === Test.userId) {
      await Test.save();
    } else {
      throw new CustomError("unAuthorised", 402);
    }
    return Test;
  } catch (error) {
    throw error;
  }
};
