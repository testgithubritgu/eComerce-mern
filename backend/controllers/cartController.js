const cartModel = require("../model/Cart")
const userModel = require("../model/User")
const productModel = require("../model/Product")
exports.addToCart = async (req, res) => {
    const { id } = req.user
    const productId = req.params.id
    const { qty } = req.body
    try {
        const findUser = await userModel.findById(id)
        if (!findUser) {
            return res.status(404).json("user not found")
        }

        const isProductExist = await productModel.findById(productId)
        if (!isProductExist) {
            return res.status(404).json({ message: "prduct not found" })
        }
        const checkUserCart = await cartModel.findOne({ user: id })
        const price = qty * isProductExist.price
        const productForCart = {
            Product: productId,
            qty,
            price
        }
        if (checkUserCart) {
            checkUserCart.items.push(productForCart)
            checkUserCart.totalPrice += price
            await checkUserCart.save()
            res.status(200).json({ message: "Product added in cart successfully", product: checkUserCart })
        } else {
            const myCart = await cartModel.create({
                user: id,
                items: [productForCart],
                totalPrice: price
            })
            res.status(200).json({ message: "Product added in cart successfully", product: myCart })
        }


    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
}


exports.removeCartItem = async (req, res) => {


    try {
        const { idx } = req.body
        const { id } = req.user
        const findCart = await cartModel.findOne({ user: id })
        if (!findCart) {
            return res.status(404).json({ message: "no cart found" })
        }
        const itemremoved = findCart.items[idx]
        findCart.totalPrice -= itemremoved.price
        findCart.items.splice(idx, 1)
        await findCart.save()
        res.status(200).json({ message: "Product removed from cart successfully", product: findCart })
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
}


exports.getMyCartItems = async(req,res)=>{
    try {
        const {id} = req.user
       
        const myCart = await cartModel.aggregate([{$match:{user:id}},{$unwind:"$items"},{$lookup:{
            from:"products",
            localField:"items.Product",
            foreignField:"_id",
            as:"myCartItems"
        }},
            
    ])
        console.log(myCart)
        res.status(200).json({message:"cart item found successfully ",myCart})
    } catch (error) {
        res.status(500).json({message:"internal server error ",err:error.message})
    }
}