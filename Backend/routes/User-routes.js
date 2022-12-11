const express = require("express");
const { signup, login, verifyToken, getUser } = require("../controllers/User-controller");

const userrouter = express.Router()


userrouter.post("/signup", signup)
userrouter.post("/login",login)
userrouter.get("/user",verifyToken, getUser)
module.exports = userrouter



