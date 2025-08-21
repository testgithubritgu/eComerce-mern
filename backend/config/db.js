const mongoose = require("mongoose")

exports.dbConnet = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/eComerce")
        console.log('db connected ')
    } catch (error) {
        console.log('db connection problem ')
    }
}