const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + file.originalname
        cb(null, fileName )
    }
})

exports.upload = multer({ storage: storage })