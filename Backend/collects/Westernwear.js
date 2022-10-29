const mongoose = require("mongoose")


const Schema = mongoose.Schema;

const westernSchema = new Schema({

    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
   price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
       
    },
    image:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Westernwear", westernSchema);