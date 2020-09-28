const mongoose=require("mongoose")
const circleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    members:[
        {
            userID:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            },
            userName:{
                type:String
            }
        }
    ],
    posts:[
        {
            postID:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Post"
            },
            userCategory:{
                type:String
            }
        }
    ]
})


const Circle=mongoose.model("Circle",circleSchema)
module.exports=Circle;