const mongoose  = require("mongoose")



const cartSchema  = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    items:[
        {
            Product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"product",
                required:true
        },

            qty:{
                type:Number,
                required:true,
            },

            price:{
                type:Number,
                required:true
            }
    }
    ],
    totalPrice:Number,

},{timestamps:true})

module.exports = mongoose.model("cart",cartSchema)