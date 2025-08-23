const Product = require("../model/Product")
const productModel = require("../model/Product")

//add new product
exports.newProduct = async (req, res) => {
    try {
        const { name, category, price, discount, stock, desc } = req.body
        const img  = req.file
       
        const isExist = await productModel.findOne({ name })
        if (isExist) {
            return res.status(400).json({ message: 'Product already exists' })
        }
        const newItem = await productModel.create({
            name, category, price, discount, stock, desc, productImage:img.filename
        })
        res.status(201).json({ message: 'product created successfully' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "internal sever error" })
    }
}

//get product by user query
exports.getProduct = async (req, res) => {

    try {
        const { name } = req.query
        const findProduct = await productModel.find({ name })
        if (findProduct.length === 0) {
            return res.status(404).json({ message: "no product found" })
        }
        res.status(200).json({ message: "product found!!", Product: findProduct })
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
}

//update product by id
exports.updateProduct = async (req, res) => {
    const { id } = req.params
    try {
        const findProduct = await productModel.findOne({ _id: id })

        if (!findProduct) { return res.status(404).json({ message: "product not found ", success: false }) }

        const { name, category, price, discount, stock, desc } = req.body

        findProduct.name = name || findProduct.name
        findProduct.category = category || findProduct.category
        findProduct.price = price || findProduct.price
        findProduct.discount = discount || findProduct.discount
        findProduct.stock = stock || findProduct.stock
        findProduct.desc = desc || findProduct.desc

        await findProduct.save()
        res.status(200).json({ message: "product updated successfully", success: true, product: findProduct })

    } catch (error) {
        res.status(500).json({ message: "internal server error", success: false })
    }
}

//get all products
exports.getAllProducts = async (req, res) => {
    try {
        const getProducts = await productModel.find()

        if (!getProducts || getProducts.length === 0) { return res.status(404).json({ message: "no product found", success: false }) }

        res.status(200).json({ message: "here is All products ", products: getProducts })
    } catch (error) {
        res.status(500).json({ message: "internal server error", success: false })
    }
}

//delete product by id
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params

        const deleteProduct = await productModel.findByIdAndDelete(id)

        if (!deleteProduct) { return res.status(404).json({ message: "no product found for delete", success: false }) }

        res.status(200).json({ message: "delete product successfully", success: true })

    } catch (error) {

        res.status(500).json({ message: "internal server error", success: false })

    }
}

//get product by product id 
exports.getProductById = async (req, res) => {
    const { id } = req.params
    try {
        const getProduct = await productModel.findById(id)

        if (!getProduct) { return res.status(404).json({ message: "no product found for this id", success: false }) }

        res.status(200).json({ message: "get product successfully", success: true, item: getProduct })
    } catch (error) {
        res.status(500).json({ message: "internal server error", success: false })
    }
}