const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const medicineSchema=new Schema({
    userId:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    dosage:{
        type:String,
        required:true
    },
    frequency:{
        type:String,
        required:true
    }
},
{ timestamps: true });


const Medicine=mongoose.model('medicine',medicineSchema);

module.exports=Medicine;