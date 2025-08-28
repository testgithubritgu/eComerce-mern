const mongoose = require("mongoose")


const reviewSchema = new mongoose.Schema({

    product:{type:mongoose.Schema.Types.ObjectId,ref:"products",required:true},

    user:{type: mongoose.Schema.Types.ObjectId,ref: "users",required: true},

    rating: {type: Number,required: true,},
    
    comment:{type: String,required: true,}
     

},{timestamps:true})

module.exports = mongoose.model("reviewProduct",reviewSchema)