const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/MongoCrud')
.then(()=>console.log("MongDB connected"))
.catch(()=>console.log("some error occur in your mongodb connection"))