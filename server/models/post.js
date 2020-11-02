const mongoose=require("mongoose")
const User=require("./user")
const Circle=require("./circle")
const postSchema=new mongoose.Schema({
    caption:{
        type:String,
        required:true
    },
    category:{
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
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    circle:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Circle"
    },
    circleName:{
        type:String
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

postSchema.pre("remove",async function(next){
    try{
        //console.log("coming heeree")
        let user=await User.findById(this.user);
        console.log("user is ",user)
        user.posts.remove(this.id)
        await user.save();
        let circle=await Circle.findById(this.circle);
        console.log("circle posts is ",circle.posts)
        circle.posts=circle.posts.filter((post)=>{
            return post.postID!=this.id
        })
        console.log("circle posts after removing ",circle.posts)
        await circle.save();
        return next();
    }catch(e){
        return next(e)
    }
})


const Post=mongoose.model("Post",postSchema)
module.exports=Post;