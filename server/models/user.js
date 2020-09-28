const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String
    },
    contact:{
        type:Number,
        required:true
    },
    circles:[
        {
            circleID:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Circle"
            },
            circleName:{
                type:String
            }
        }
    ]
})

userSchema.pre("save",async function(next){
    try{
        if(!this.isModified("password")){
            //console.log("here")
            return next();
        }
        var hashedPass=await bcrypt.hash(this.password,10)
        //console.log(hashedPass)
        this.password=hashedPass
        return next()
    }catch(err){
        return next(err)
    }
})

userSchema.methods.comparePassword=async function(candidatePassword,next){
    try{
        let isMatch=await bcrypt.compare(candidatePassword,this.password)
        return isMatch;
    }catch(err){
        return next(err)
    }
}

const User=mongoose.model("User",userSchema)
module.exports=User;