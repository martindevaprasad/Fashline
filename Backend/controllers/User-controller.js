const { json } = require("express");
const User = require("../collects/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "Mykey";

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
  const token = jwt.sign({ id: existinguser._id }, JWT_SECRET_KEY, {
    expiresIn: "30s"
  });

  res.cookie(String(existinguser._id),token,{
    path:"/",
    expires : new Date(Date.now() + 1000*30),
    httpOnly: true,
    sameSite: 'lax'
  })
  return res
    .status(200)
    .json({ message: "succesfully logged In", User: existinguser, token });
};

const verifyToken = (req, res, next) => {
  const cookie = req.headers.cookie;
  const token = cookie.split("=")[1];
  console.log(token);
 
  if (!token) {
    res.status(404).json({ message: "no token found" });
  }
  jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "invalid token" });
    }

    console.log(user.id);
      req.id = user.id

  });
  next();
};


const getUser = async(req,res,next)=>{

  const userID = req.id;

  let user;

  try{
    user = await User.findById(userID,"-password")
  }
  catch(err){
    return new Error(err)
  }

  if(!user){
    return res.status(404).json({message:"user not found"})
  }

  return res.status(200).json({user})

}

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
