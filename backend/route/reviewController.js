const { removerFavItems } = require("../controllers/favourite")
const { addReview } = require("../controllers/reviewController")
const { authCheck } = require("../middelware/authCheck")

const  router = require("express").Router()

router.post("/add_review/:id", authCheck, addReview)


module.exports = router