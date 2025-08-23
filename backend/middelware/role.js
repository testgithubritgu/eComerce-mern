const mongoose = require("mongoose")

exports.roleUser = (...role)=>{
    return function(req,res,next){
        const userRole = req.user.role 
        try {
            if (!role.includes(userRole)){
               return  res.status(403).json({
                    message:"access denied you do not have permition",
                    success:false
                })
            }
            next()
        } catch (error) {
            res.status(500).json({message:"internal server error"})
        }
    }
}