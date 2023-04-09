const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const healthSchema=new Schema({
    bloodGroup:{
        type:String,
        default:"N/A"
    },
    age:{
        type:String,
        default:"N/A",
    },
    gender:{
        type:String,
        enum:["Male","Female","N/A"],
        default:"N/A"
    },
    height:{
        type:String,
        default:"N/A"
    },
    weight:{
        type:String,
        default:"N/A"
    }
});

const HealthReport=mongoose.model('health',healthSchema);

module.exports=HealthReport;