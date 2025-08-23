const express = require("express")
const app = express()
require('dotenv').config()
const port = process.env.PORT

//routes import here
const authRoutes = require("./route/authController")
const producRoutes = require("./route/productController")
const orderRoutes = require("./route/orderController")
const cartRoutes  = require("./route/cartController")

//middelware imports
const { dbConnet } = require("./config/db")
const { errorHandler } = require("./middelware/errorHandler")
const notFound = require("./middelware/pageNotFound")

//middelware
app.use(require("cors")())
app.use(express.json())



//routs for authentication
app.use("/api/auth",authRoutes)

//routs for products 
app.use('/api/product', producRoutes)

//routs for user order 
app.use("/api/order", orderRoutes)

//routes for cartItems
app.use("/api/addToCart", cartRoutes)


//error handler in aur app
app.use(notFound)
app.use(errorHandler)

dbConnet().then(()=>{
    app.listen(port,()=>{
        console.log('server started on port 5001 😊')
    })
})