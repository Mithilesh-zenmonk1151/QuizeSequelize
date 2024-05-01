const CustomError = require("../libs/error");
const { response } = require("../models");
const { questions } = require("../models");

exports.createResponse = async (payload) => {
  try {
    const { userId, questionId, studentAnswer } = payload.body;
    if (!userId) {
      throw new CustomError("User not found", 404);

    }
    console.log("Payload.body",payload.body);
    const questionRe = await questions.findOne({ where: { uuid: questionId } });
    const correctQuestion = questionRe.correctOption;
    const questMark = questionRe.weightage;
    console.log("qqqqueeesstMARKSS",questMark,correctQuestion )
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
    // const isResponseExist= await responses.findOne({where:{testQuestionId:questionId}});
    // if(!isResponseExist){
        const Response = await response.create({
            userId: userId,
            response: respon,
            questionMarks: questionMarks,
            correct: respon,
            testQuestionId:questionId
        });
    //       });

    // }
    // else if(isResponseExist){
        
    // }
    

    return Response;
  } catch (error) {
    console.log("ërrorr", error)
    throw error;
  }
};
