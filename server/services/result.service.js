const CustomError = require("../libs/error");
const { response } = require("../models");
const { result } = require("../models")
exports.createResult = async (payload) => {
    try {
        const { userId, testId } = payload.body;
        if (!userId) {
            throw new CustomError("user is not defined with user id", 404);
        }
        if (!testId) {
            throw new CustomError("test is not exists", 404);
        }
        const responseRes = await response.findAll({ where: { testId: testId, userId: userId } })
        const getMarks = await responseRes.reduce((acc, response) => acc + response.questionMarks, 0);
        console.log("useer get Total Marks", getMarks);
        const resultRes = await result.create({
            userId: userId,
            testId: testId,
            getMarks: getMarks
        })
        return resultRes;
    }
    catch (error) {
        throw new CustomError("Internal Server error", 500);
    }
}
exports.getResults= async(payload)=>{
    try {
        const {userId,testId}=payload.params;
        if(!userId){
            throw new CustomError("user not found", 404);
        }
        if(!testId){
            throw new CustomError("test not found",404);
        }
        const resultRes = await result.findOne({
            where: { userId: userId, testId: testId }
        })
        return resultRes;
    }
    catch (error) {
        throw error;
    }
}
