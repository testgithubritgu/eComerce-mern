const express = require("express")
const { addFavItems, removerFavItems, getFavourite } = require("../controllers/favourite")
const { authCheck } = require("../middelware/authCheck")
const router = express.Router()

router.post("/addItem/:id",authCheck, addFavItems)
router.post("/removeItems", authCheck, removerFavItems)
router.get("/getfav",authCheck,getFavourite)
module.exports = router