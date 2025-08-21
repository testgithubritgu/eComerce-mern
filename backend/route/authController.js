const express = require("express")
const { login, newUser } = require("../controllers/authController")
const route = express.Router()

route.post("/register",newUser)
route.post("/login",login)


module.exports = route