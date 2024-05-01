const {responseService}= require("../services");
exports.createResponse= async(req,res)=>{
    try{
        const response= await responseService.createResponse(req);
        res.status(201).json({response});

    }
    catch(error){
        res.status(500).json({message:error.message});
        console.log(error);
    }
}

exports.getResponses=async(req,res)=>{
    try{

    }
    catch(error){
        res.status(500).json({message:error.message});
        console.log(error);
        console.log(error.message);


    }
}