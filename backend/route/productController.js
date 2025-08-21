const express = require("express")
const { newProduct, getProduct, updateProduct, getAllProducts, deleteProduct, getProductById } = require("../controllers/productController")
const { authCheck } = require("../middelware/authCheck")
const router = express.Router()

//add new product here
router.post('/new_product', authCheck, newProduct)

//get product by user query
router.get("/get_product", authCheck, getProduct)

//get product by productID
router.get('/getProduct/:id',getProductById)

//update product by id
router.put("/update/:id", authCheck, updateProduct)

//get all products 
router.get("/get_products", getAllProducts)

//delete product by id
router.delete("/delete_product/:id", deleteProduct)


module.exports = router