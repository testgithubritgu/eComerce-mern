const ReviewModel = require("../model/Review");
const userModel = require("../model/User");
const producModel = require("../model/Product")
exports.addReview = async (req, res) => {
    try {
        const { id } = req.user
        const  productid  = req.params.id
        const {rating,comment} = req.body
        const user = await userModel.findById(id)
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        
        const isProductExist = await producModel.findById(productid)
        if (!isProductExist) {
            return res.status(404).json({ message: "product not found" })
        }
        
        const checkIfReviewUser = await ReviewModel.findOne({user:id,product:productid})
        if (checkIfReviewUser){
            return res.status(400).json({message:"you already have  an review on this product "})
        }

        const newReview =await ReviewModel.create({
            product:productid,
            user:id,
            rating,
            comment

        })
        res.status(201).json({messsage:"review added succesfully",myReview:newReview})
    } catch (error) {
        res.status(500).json({message:"internal server error ",err:error.message})
    }
    
}




