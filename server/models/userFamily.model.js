const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const familySchema=new Schema({
    userId:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    relationship:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:false
    },
    isWhatsapp:{
        type:Boolean,
        enum:[true,false],
        default:false
    },
    medication_ids:{
        type:Array,
        default:[],
    },
},
{ timestamps: true });


const Family=mongoose.model('family',familySchema);

module.exports=Family;