const mongoose=require("mongoose")
const circleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    posts:[
        {
            postID:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Post"
            },
            postCategory:{
                type:String
            }
        }
    ]
})


const Circle=mongoose.model("Circle",circleSchema)
module.exports=Circle;