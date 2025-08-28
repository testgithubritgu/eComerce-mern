const mongoose = require("mongoose")

const favSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    items:[
        {product:{type:mongoose.Schema.Types.ObjectId,ref:"product"}}
    ]

},{timestamps:true})

module.exports = mongoose.model("favourite",favSchema)
 