const { where } = require("sequelize");
const CustomError = require("../libs/error");
const { users } = require("../models");
const { test } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signup = async (payload) => {
  try {
    const { name, email, password, role } = payload.body;
    console.log("Role--->", role, password);
    // const existingUser = await users.findOne({ where: { email: email } });
    // if (existingUser) {
    //   return 409;
    // }
    const validateEmail = (email) => {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(email);
    };
    const validatePassword = (pass) => {
      // Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return regex.test(pass);
    };

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    console.log(isEmailValid, isPasswordValid);
    const { testId } = payload.body;

    // if (isEmailValid)  {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await users.create({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    });
    console.log("userefewfw->>", user);
    return user;
  } catch (err) {
    console.log(err);
    return err;
  }
};
exports.login = async (payload) => {
  try {
    const { email, password } = payload.body;

    if (!email && !password) {
      throw new CustomError("User credentials not found", 422);
    }
    const user = await users.findOne({ where: { email: email } });
    if (!user) {
      throw new CustomError("User doesn't exist", 404);
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      console.log("Password is not matched");
      throw new CustomError("User password is wrong", 401);
    }
    if (isValidPassword) {
      var token = jwt.sign(
        { email: user.email, id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );
    }
    console.log("usser--=>", user.password);
    if (!token) {
      throw new CustomError("Token not generating", 500);
    }
    console.log("token---->", token);
    user.token = token;
    user.password = undefined;
    return { user, token };
  } catch (error) {
    throw error;
  }
};
exports.getAllUser = async (payload) => {
  try {
    const allUsers = await users.findAll();
    console.log("users");
    return allUsers;
  } catch (error) {
    throw error;
  }
};
exports.updateUser = async (payload) => {
  try {
    const { userId } = payload.params;
    const { name, email } = payload.body;
    const updateUser = await users.create({ where: { uuid: userId } });
    await updateUser({
      name: name,
      email: email,
    });
    await updateUser.save();
    return updateUser;
  } catch (error) {
    throw error;
  }
};
