
const express = require("express")
const { addToCart } = require("../controllers/cartController")
const { authCheck } = require("../middelware/authCheck")
const router = express.Router()

router.post("/:id",authCheck, addToCart)

module.exports = router