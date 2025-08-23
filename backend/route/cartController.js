
const express = require("express")
const { addToCart, removeCartItem, getMyCartItems } = require("../controllers/cartController")
const { authCheck } = require("../middelware/authCheck")
const router = express.Router()

router.post("/addItem/:id",authCheck, addToCart)
router.post("/remove_cart_item", authCheck, removeCartItem)
router.get("/getmycart", authCheck, getMyCartItems)
module.exports = router