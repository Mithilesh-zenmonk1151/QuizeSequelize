const CustomError = require("../libs/error");
const { response } = require("../models");
const { questions } = require("../models");
const { result } = require("../models")

exports.createResponse = async (payload) => {
  try {
    const { userId, testQuestionId, studentAnswer,testId } = payload.body;
    if (!userId) {
      throw new CustomError("User not found", 404);

    }
    console.log("Payload.body", payload.body);
    const questionRe = await questions.findOne({ where: { uuid: testQuestionId } });
    const correctQuestion = questionRe.correctOption;
    const questMark = questionRe.weightage;
    console.log("qqqqueeesstMARKSS", questMark, correctQuestion)
    let questionMarks;
    let respon;
    if (correctQuestion === studentAnswer) {
      console.log("Yess it is Correct hai ============")
      respon = true;
    } else {
      respon = false;
    }
    if (respon) {
      questionMarks = questMark;
    } else {
      questionMarks = 0;
    }
    const isResponseExist = await response.findOne({ where: { testQuestionId: testQuestionId } });
    let Response
    if (!isResponseExist) {
      Response = await response.create({
        userId: userId,
        response: respon,
        questionMarks: questionMarks,
        correct: respon,
        testQuestionId: testQuestionId,
        testId:testId,

      });


    }
    else if (isResponseExist) {
      Response = await response.update({
        userId: userId,
        response: respon,
        questionMarks: questionMarks,
        correct: respon,
        testId:testId,
        testQuestionId: testQuestionId
      }, { where: { testQuestionId: testQuestionId } });




    }


    return Response;
  } catch (error) {
    console.log("ërrorr", error)
    throw error;
  }
};
exports.getResponse = async (payload) => {
  try {
    const { userId, testId } = payload.body;
    if (!userId) {
      throw new CustomError("user is not found", 404);
    }
    if (!testId) {
      throw new CustomError("test is not found ", 404);
    }
    const responseRes = await response.findAll({ where:{ testId: testId,userId:userId } })

    console.log("useer get Total Marks", responseRes);
    return responseRes
  }
  catch (error) {
    throw error;

  }
}





// const responses = await Response.findAll();
// // Calculate total marks
// const totalMarks = responses.reduce((acc, response) => acc + response.marks, 0);
// console.log('Total Marks:', totalMarks);
//   } catch (error) {
//   console.error('Error calculating total marks:', error);
// } finally {
//   // Close the Sequelize connection
//   await sequelize.close();
// }
// }
// // Call the function to calculate total marks
// calculateTotalMarks();
