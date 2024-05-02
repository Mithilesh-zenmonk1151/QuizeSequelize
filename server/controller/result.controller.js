const CustomError = require("../libs/error");
const {resultService} = require("../services");
exports.createResult=async(req,res)=>{
    try{
        const response= await resultService.createResult(req);
        res.status(201).json({response})

    }
    catch(error){
        console.log(error.message);

        throw new CustomError("Internal server error",500);

    }
}
exports.getResults=async(req,res)=>{
    try{
        const response= await resultService.getResults(req);
        res.status(200).json({response})

    }
    catch(error){
        throw new CustomError("Internal Server Error",500);
    }
}