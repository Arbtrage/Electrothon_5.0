const User=require('../models/user.model');
const HealthReport=require('../models/userHealthReport.model');

module.exports={
    getUser:async(req,res)=>{
        const id=req.body.id;
        const user=await User.findById(id);
        const health=await HealthReport.find({"userId":id});
        res.status(200).json({User:user,Health:health});
    },
    modifyHealth:async (req, res) => {
        const { userId, bloodGroup,age,gender,height,weight } = req.body;
        
        try {
          const user = await User.findById(userId);
          const healthId=user.health_id;
        //   const updateObj = {};
        //     updateObj[fieldName] = fieldValue;
          console.log(healthId);
          await HealthReport.findOneAndUpdate(
            { "_id": healthId },{
                $set: {
                    "bloodGroup": bloodGroup,
                    "age":age,
                    "gender":gender,
                    "height":height,
                    "weight":weight
                }
             }, { new: true }
        );;
        //   healthReport[fieldName]=fieldValue;
        //   await healthReport.save();
        //   console.log(healthReport);
          res.status(200).json({ message: `Successfully updated` });
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Failed to update health field' });
        }
      }
}