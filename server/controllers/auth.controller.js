const User=require('../models/user.model');
const Health=require('../models/userHealthReport.model');
const jwt=require('../services/jwtService');


module.exports={
    signUp:async(req,res)=>{
        if(req.body.googleWala==true){
            console.log("Google wala")
            const {userName,email}=req.body;
            try{
                const doesExists=await User.findOne({email:email});
                if(doesExists) 
                    throw createError.Conflict(`A user with this ${email} email id already exists!!`);
        
                const user=new User({userName,email});
                await user.save();
                console.log("Just Checking")
                console.log(user)
                res.status(201).json({Message:"User registered"});
            }catch(error){
                console.log("Just Checking")
                res.status(400).json({message:'Error'})
            }
        }
        else{
            console.log("Normal wala")
            const {userName,email,password}=req.body;
            try {
                const doesExists=await User.findOne({email:email});
                if(doesExists) 
                    throw createError.Conflict(`A user with this ${email} email id already exists!!`);
        
                const user=new User({userName,email,password});
                await user.save();
                console.log("first")
                const userhealth=new Health({
                    userId:user._id
                })
                await userhealth.save();
                res.status(201).json({Message:"User registered with password"});
            } catch (error) {
                console.log(error.message)
                res.status(400).json({message:'Error'})
            }

        }
    },
    signIn:async(req,res)=>{
        if(req.body.googleWala==true){
            console.log("Google wala")
            const {email}=req.body;
            try{
                const user=await User.findOne({email:email});
                if(!user) throw createError.NotFound('User not registered');
                const token=jwt.encode(email);
                res.json({User:user.userName,Token:token});
            }catch(error){
                res.status(400).json({message:'Error'})
            }
        }
        else{
            console.log("Normal wala")
            const {email,password}=req.body;
            try {
                const user=await User.findOne({email:email});
                if(!user) throw createError.NotFound('User not registered');
                const isMatch = await user.isValidPassword(password)
                if (!isMatch)
                    throw createError.Unauthorized('Username/password not valid')
                const token=jwt.encode(email);
                res.json({User:user.firstname,Token:token});
            } catch (error) {
                res.status(400).json({message:'Error'})
            }

        }
    }
}