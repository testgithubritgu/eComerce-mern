const express  = require("express")
const { myOrders, cancelOrder } = require("../controllers/orderController")
const { authCheck } = require("../middelware/authCheck")
const router = express.Router()

router.post('/orderProduct/:id', authCheck, myOrders)
router.post('/cancelOrder', authCheck, cancelOrder)
module.exports = router