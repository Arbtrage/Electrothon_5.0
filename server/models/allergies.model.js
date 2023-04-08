const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const allergiesSchema=new Schema({
    userId:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    severity:{
        type:String,
        enum:["High","Medium","Low"],
        default:"Low",
    }
})

const Allergies=mongoose.model('allergy',allergiesSchema);

module.exports=Allergies;