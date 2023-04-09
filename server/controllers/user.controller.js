const User=require('../models/user.model');

module.exports={
    getUser:async(req,res)=>{
        const id=req.body.id;
        const user=await User.findById(id);
        res.status(200).json(user);
    }
}