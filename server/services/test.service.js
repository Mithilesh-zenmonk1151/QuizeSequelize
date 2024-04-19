const {test}= require("../models")
exports.createTest=async(payload)=>{
    try{
        const{name, totalNumberOfQuestions,totalMarks,instructions,duration}=payload.body;
        const Test= await test.create({
            name:name,
            totalNumberOfQuestions:totalNumberOfQuestions,
            totalMarks:totalMarks,
            instructions:instructions,
            duration:duration
        })
        return Test;
    }
    catch(error){
        throw error;
    }
}
exports.getTests=async(payload)=>{
    try{
        
 const response= await test.findAll();
 return response;
    }
    catch(error){
        throw error;
    }
}
exports.updateTes=async(payload)=>{
    try{
        const {id}=payload.params;
        const {name,totalNumberOfQuestions,totalMarks,instructions,duration}=payload.body;
        const Test=await test.update({id:id});
        await  Test.save();
        return Test;
    }
    catch(error){
        throw error;
    }
}