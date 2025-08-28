const express = require("express")
const { login, newUser, userAccountUpdate, getAllusers } = require("../controllers/authController")
const { authCheck } = require("../middelware/authCheck")
const { roleUser } = require("../middelware/role")
const route = express.Router()

route.post("/register" ,newUser)
route.post("/login" ,login)
route.put("/updateAccount", authCheck, roleUser("admin","user"), userAccountUpdate)
route.get("/getAllUsers", authCheck, roleUser("admin"), getAllusers)


module.exports = route 