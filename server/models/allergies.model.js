const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const allergiesSchema=new Schema({
    userId:{
        type:String,
        required:true,
    },
    allergy:{
        type:Array,
        default:[]
    }
})

const Allergies=mongoose.model('allergy',allergiesSchema);

module.exports=Allergies;