const favModel = require("../model/faviourite")
const Product = require("../model/Product")

exports.addFavItems = async (req, res) => {
        try {
            const { id } = req.user
            const productId  = req.params.id
            const isExistProduct = await Product.findById(productId)
            if (!isExistProduct) {
                return res.status(404).json({ message: "Product not found" });
            }
            let findFav = await favModel.findOne({ user: id })

            const pushItem = {
                product: productId
            }
            if (findFav) {
                const checkProduct = findFav.items.some((prod) => prod.product.toString() === productId)
                if (checkProduct) {
                    return res.status(400).json({ message: "Product already in favourites" });

                }
                findFav.items.push(pushItem)
                await findFav.save()

            } else {

               findFav =   await favModel.create({
                    user: id,
                    items: [pushItem]
                })
            }
            return res.status(201).json({ message: "added fav0ourite",favourite:findFav })

        } catch (error) {
            return res.status(500).json({message:"internal server error",success:false})
        }
}

exports.removerFavItems = async(req,res)=>{
    const {id} = req.user 
    const productId  = req.body.id
    try {
        const isExistProduct = await Product.findById(productId);
        if (!isExistProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        const finditem = await favModel.findOne({user:id})
        if(finditem){
            const newItemList = finditem.items.filter(data => data.product.toString() !== productId)
            finditem.items = newItemList
            await finditem.save()
            return res.status(200).json({message:"deleted item",item:newItemList})
        }
        return res.status(404).json({message:"no items found!"})
    } catch (error) {
        res.status(500).json({err:error.message})
    }
}