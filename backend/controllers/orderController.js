const userModel = require("../model/User")
const orderModel = require("../model/Order")
const productModel = require("../model/Product")





exports.myOrders = async (req, res) => {
    const { id } = req.user
    const productId = req.params.id
    const { qty, street, city, state, pincode } = req.body

    try {
        const getProduct = await productModel.findById(productId)

        if (!getProduct) { return res.status(404).json({ message: "no product found " }) }

        const price = getProduct.price * qty

        const checkOrderUser = await orderModel.findOne({ user: id })

        if (getProduct.stock < qty) { return res.status(400).json({ message: "Not enough stock available" }) }
        
        getProduct.stock -= qty
        await getProduct.save()

        if (!checkOrderUser) {
            const newOrder = await orderModel.create({
                user: id,
                items: [{ product: productId, qty, price }],
                totalAmount: price,
                address: { street, city, state, pincode }
            })
            return res.status(201).json({ message: "Order created", success: true, order: newOrder })
        } else {
            checkOrderUser.items.push({ product: productId, qty, price })
            checkOrderUser.totalAmount += price
            await checkOrderUser.save()
            return res.status(200).json({ message: "Order updated", success: true, order: checkOrderUser })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", success: false, error: error.message })
    }
}



exports.cancelOrder = async (req, res) => {
    try {
        const { idxForProduct } = req.body
        const { id } = req.user
        const getUserOrders = await orderModel.findOne({ user: id })

        if (!getUserOrders) { return res.status(404).json({ message: "no orders found " }) }

        getUserOrders.totalAmount = getUserOrders.totalAmount - getUserOrders.items[idxForProduct].price
        getUserOrders.items.splice(idxForProduct, 1)
        await getUserOrders.save()
        res.status(200).json({ message: "deleted order successfully" })

    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
}





