const {questionService} = require("../services")
exports.createQuestion = async(req, res)=> {
    try {
        console.log("Quesstsdfkdjf=======")
        const response = await questionService.createQuestion(req);
        if(!response) throw new CustomError("Question not added", 500)
         res.status(200).json({response});
    } catch (error) {
        res.status(error?.code || 500).json({message : error?.message});
    }
}