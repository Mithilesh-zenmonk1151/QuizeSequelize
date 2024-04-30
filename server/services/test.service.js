const CustomError = require("../libs/error");
const { test } = require("../models");
exports.createTest = async (payload) => {
  try {
    const {
      name,
      totalNumberOfQuestions,
      totalMarks,
      instructions,
      duration,
      userId,
    } = payload.body;
    console.log("PAAAAYLLLOAD.BBODDY", payload.body);
    const Test = await test.create({
      name: name,
      totalNumberOfQuestions: totalNumberOfQuestions,
      totalMarks: totalMarks,
      instructions: instructions,
      duration: duration,
      userId: userId,
    });
    console.log("Testikklkl", Test);
    return Test;
  } catch (error) {
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
