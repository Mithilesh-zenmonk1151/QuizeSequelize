const CustomError = require("../libs/error");
const authService = require("../services/auth");

exports.signup = async (req, res) => {
  try {
    const user = await authService.signup(req);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("error in signup");
  }
};
exports.login = async (req, res) => {
  try {
    const response = await authService.login(req);
    res.status(200).json({
      user: response,
      message: "user logged in successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
exports.getAllUser=async(req,res)=>{
  try{
    const response= await authService.getAllUser(req);
    res.status(200).json({response});

  }
  catch(error){
    res.status(500).json({message:error?.message});
  }
}
