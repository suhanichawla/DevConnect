const mongoose=require("mongoose")
const postSchema=new mongoose.Schema({
    circleName:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    numOfLikes:{
        type:Number
    },
    numOfComments:{
        type:Number
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    comments:[
        {
            userID:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            },
            comment:{
                type:String,
                required:true
            }
        },
    ]
},
    {
        timestamps:true
    }
)


const Post=mongoose.model("Post",postSchema)
module.exports=Post;