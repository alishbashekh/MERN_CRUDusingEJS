const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    image: String,
    name:String,
    email:String
})

module.exports=mongoose.model('user',userSchema);