const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
   
    },
    category: {
      type: String,
      required: true,
   
    },
    price: {
      type: Number,
      required: true
    },
    discount: {
      type: Number,
      default: 0
    },
    stock: {
      type: Number,
      default: 0
    },
    averageRating: {
      type: Number,
      default: 0
    },
    productImage: {
      type: String
    },
    desc: {
      type: String,
   }
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Product", productSchema);