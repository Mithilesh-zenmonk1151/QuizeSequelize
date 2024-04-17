const authService= require("../services/auth");

exports.signup=async(req,res)=>{
    try{
        const user= await authService.signup(req);
        res.status(201).json({user});

    }
    catch(error){
        res.status(500).json({message:error.message})
        console.log("error in signup")
    }
}
