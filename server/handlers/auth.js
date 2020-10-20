const db=require("../models")
const jwt=require("jsonwebtoken")

exports.signin=async function(req,res,next){
    try{
        let {email,password}=req.body;
        let user=await db.User.findOne({email:email})
        let isMatch=await user.comparePassword(password)
       if(isMatch){
            let token=jwt.sign({
                ...user._doc
            },process.env.SECRET_KEY)
            return res.status(200).json({
                token
            })
       }else{
           next({
            status:400,
            message:"Incorrect username or password"
           })
       }
    }catch(err){
        return next({
            status:400,
            message:"Incorrect username or password"
        })
    }
}
exports.signup=async function(req,res,next){
    try{
        userdata=req.body
        userdata["circles"]=[];
        userdata["posts"]=[];
        let user=await db.User.create(userdata)
        let token=jwt.sign({
            ...user._doc
        },process.env.SECRET_KEY)
        return res.status(200).json({
            token
        })
    }catch(err){
        if(err.code===11000){
            err.message="Sorry that username is taken and/or email is taken"
        }
        return next({
            status:400,
            message:err.message
        })
    }
}