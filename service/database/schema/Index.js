const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var indexSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    password:{
        type:String,
        required:true,
        index:true,
    }
}, {
  collection: "index"
});

//Export the model
module.exports = mongoose.model('Index', indexSchema);