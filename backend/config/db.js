const mongoose = require("mongoose")

exports.dbConnet = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/eComerce`)
        console.log('db connected ')
    } catch (error) {
        console.log('db connection problem ')
    }
}