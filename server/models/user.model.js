const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt');

const userSchema=new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
    },
    profilePicture:{
      type:String,
      required:false
    },
    password:{
        type:String,
        default:"",
    },
    phone_number:{
      type:String,
      default:""
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
    family_member_ids:{
      type:Array,
      default:[],
    }
},
{ timestamps: true });


userSchema.pre('save',async function(next){
    if(this.password===""){
        return "";
    }
    try {
        if (this.isNew) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.password, salt)
            this.password = hashedPassword
          }
        next();
    } catch (error) {
        next(error);
    }
})


userSchema.methods.isValidPassword = async function (password) {
    
    try {
      return await bcrypt.compare(password, this.password)
    } catch (error) {
      throw error
    }
  }

const User=mongoose.model('user',userSchema);

module.exports=User;