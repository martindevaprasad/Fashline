const { json } = require("express");
const User = require("../collects/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "Mykey"

const signup = async (req, res, next) => {
  const { Username, email, password } = req.body;

  let existinguser;

  try {
    existinguser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (existinguser) {
    return res
      .status(400)
      .json({ message: "user already exists! login instead" });
  }

  const hashedpassword = bcrypt.hashSync(password);

  const user = new User({
    Username,
    email,
    password: hashedpassword
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json({ message: user });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existinguser;
  try {
    existinguser = await User.findOne({ email: email });
  } catch (err) {
    return new Error(err);
  }
  if (!existinguser) {
    return res.status(400).json({ message: "User not found please login!!" });
  }

  const ispasswordcorrect = bcrypt.compareSync(password, existinguser.password);
  if (!ispasswordcorrect) {
    return res.status(400).json({ message: "email/password is incorrect" });
  }
  const token = jwt.sign({id:existinguser._id},JWT_SECRET_KEY,{expiresIn:"1hr"})
  return res.status(200).json({ message: "succesfully logged In",User:existinguser,token });
};
exports.signup = signup;
exports.login = login;
