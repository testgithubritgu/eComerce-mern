const userModel = require("../model/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

exports.newUser = async (req, res) => {
    const { name, email, password, role, address, phone } = req.body
    const userExist = await userModel.findOne({ email })

    if (userExist) {
        return res.status(409).json({ meassage: "user already exist " })
    }

    try {
        const hashPass = await bcrypt.hash(password, 10)
        const user = await userModel.create({
            name, email, password: hashPass, role, address, phone
        })

        res.status(201).json({ message: "new user created successfully!!" })
    } catch (error) {
        res.status(500).json({ message: "internal server error", er: error })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
       
        const userExist = await userModel.findOne({email})

        if (!userExist) { return res.status(404).json({ message: "user not exist " }) }

        const checkPass =await bcrypt.compare(password, userExist.password)

        if (!checkPass) { return res.status(400).json({ message: "invalid credintials " }) }

        const token = jwt.sign({ id: userExist._id, role: userExist.role }, process.env.TOKEN_SECRET_KEY)
        res.status(200).json({ message: "user logged in..." ,token})

    } catch (error) {
        res.status(500).json({ message: "internal server error", error })
    }


}