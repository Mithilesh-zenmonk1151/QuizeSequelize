const testService= require("../services/test.service");
exports.createTest=async(req,res)=>{
    try{
        const tests= await testService.createTest(req);
        res.status(201).json({tests})

    }
    catch(error){
        res.status(500).json({message:error.message});
        console.log(error)

    }
}
exports.getTests=async(req,res)=>{
    try{
        const tests= await testService.getTests(req);
        res.status(200).json({tests})

    }
    catch(error){
        res.status(500).json({message:error.message});
        console.log(error)
    }
}