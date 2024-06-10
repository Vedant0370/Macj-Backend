const mongoose = require('mongoose')

const fileUpload = mongoose.Schema({
    file :String
})

const uploadedFile = mongoose.model("hzffile" ,fileUpload)

module.exports = uploadedFile