const {users}= require("../models");
const {test}= require("../models")
const bcrypt=require("bcrypt")
exports.signup = async (payload) => {
  try {
    const { name, email, password, role } = payload.body;
    const existingUser = await users.findOne({ where: { email: email } });

    if (existingUser) {
      return 409;
    }

    const validateEmail = (email) => {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(email);
    };

    // const validatePassword = (pass) => {
    //   // Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character
    //   const regex =
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //   return regex.test(pass);
    // };

    // const isEmailValid = validateEmail(email);
    // const isPasswordValid = validatePassword(password);
    // console.log(isEmailValid, isPasswordValid);
    const {testId}= payload.body;

    // if (isEmailValid)  {
      // const hashedPassword = bcrypt.hashSync(password);
      const tests=await test.findOne({where:{id:testId}})
      console.log("testsss:---",tests.instructions)

      const user = await users.create({
        name:name,
        email:email,
        password:password,
        role:role,
      });

      return user;
    // } else if (!isEmailValid) {
    //   return 405;
    // } else if (!isPasswordValid) {
    //   return 400;
    // }
  } catch (err) {
    console.log(err);
    return err;
  }
};
