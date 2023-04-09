const User=require('../models/user.model');
const Health=require('../models/userHealthReport.model');

module.exports={
    getUser:async(req,res)=>{
        const id=req.body.id;
        const user=await User.findById(id);
        const health=await Health.find({"userId":id});
        res.status(200).json({User:user,Health:health});
    }
}