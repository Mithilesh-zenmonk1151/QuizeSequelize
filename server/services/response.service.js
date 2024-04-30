const CustomError = require("../libs/error");
const { responses } = require("../models/response");
const { questions } = require("../models/questions");

exports.createResponse = async (payload) => {
  try {
    const { userId, questionId, studentAnswer } = payload.body;
    if (!userId) {
      throw new CustomError("User not found", 404);
    }
    const questionRe = await questions.find({ where: { id: questionId } });
    const correctQuestion = questionRe.correctOption;
    const questMark = questionRe.weightage;
    let questionMarks;
    let response;
    if (correctQuestion === studentAnswer) {
      response = true;
    } else {
      response = false;
    }
    if (response) {
      questionMarks = questMark;
    } else {
      questionMarks = 0;
    }
    const isResponseExist= await responses.find({where:{questionId}});
    if(!isResponseExist){
        var Response = await responses.create({
            userId: userId,
            response: response,
            questionMarks: questionMarks,
            correct: response,
          });

    }
    else if(isResponseExist){
        
    }
    

    return Response;
  } catch (error) {
    console.log("ërrorr", error)
    throw error;
  }
};
