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
        console.log("Gett controller");
        const response= await responseService.getResponse(req);
        res.status(200).json({response});

    }
    catch(error){
        res.status(500).json({message:error.message});
        console.log(error);
        console.log(error.message);


    }
}