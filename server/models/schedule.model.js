const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const scheduleSchema=new Schema({
    userId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    whatsAppNumber:{
        type:String,
        default:""
    },
    phoneNumber:{
        type:String,
        default:""
    },
    medTimings:{
        type:Array,
        // enum:["Morning","Afternoon","Evening","Night"],
        default:[]
    },
    medDuration:{
        type:String,
        required:true
    }
},
{ timestamps: true });


const Schedule=mongoose.model('schedule',scheduleSchema);

module.exports=Schedule;