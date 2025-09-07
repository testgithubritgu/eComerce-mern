const express = require("express")
const { newProduct, getProduct, updateProduct, getAllProducts, deleteProduct, getProductById } = require("../controllers/productController")
const { authCheck } = require("../middelware/authCheck")
const { upload } = require("../multer/multer")
const router = express.Router()

//add new product here
router.post('/new_product', authCheck, upload.single("file"), newProduct)

//get product by user query
router.get("/get_product", authCheck, getProduct)

//get limited product
router.get("/product_limit", getProduct)

//get product by productID
router.get('/getProduct/:id',getProductById)

//update product by id
router.put("/update/:id", authCheck, upload.single("file"), updateProduct)

//get all products 
router.get("/get_products", getAllProducts)

//delete product by id
router.delete("/delete_product/:id", authCheck, deleteProduct)


module.exports = router