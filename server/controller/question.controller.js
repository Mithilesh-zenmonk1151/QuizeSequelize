const {questionService} = require("../services")
exports.addQuestion = async(req, res)=> {
    try {
        const response = await questionService.addQuestions({userId : req?.user?.id, data: req?.body});
        if(!response) throw new CustomError("Question not added", 500)
        res.status(200).json(response);
    } catch (error) {
        res.status(error?.code || 500).json({message : error?.message});
    }
}