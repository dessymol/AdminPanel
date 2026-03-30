const mongoose=require('mongoose')

const model= new mongoose.Schema(
    {
        coursename:{
           type: String,
         required:true
        }
    },
    {
        feedback:{
            type:String,
            required:true
        }
    },
    {
        rating:{
            type:Number,
            required:true
        }
    }
);
module.exports = mongoose.model("panel", model);