const db=require("../models")

exports.addPost=async function(req,res,next){
    try{
        console.log("req body",req.body)
        let foundCircle=await db.Circle.findOne({name:req.body.circle})
        let post=await db.Post.create({
            ...req.body,
            user:req.params.userID,
            circle:foundCircle.id,
            numOfLikes:0,
            likes:[],
            numOfComments:0,
            numOfComments:0
        })
        console.log(req.params);
        let foundUser=await db.User.findById(req.params.userID)
        foundUser.posts.push(post.id)
        await foundUser.save();
        foundCircle.posts.push(post.id)
        await foundCircle.save();
        let foundPost=await db.Post.findById(post._id)
        .populate("user",{
            name:true,
            email:true
        })
        .populate("circle",{
            name:true
        })
        return res.status(200).json(foundPost);
    }catch(e){
        console.log("error",e)
        return next(e)
    }
}


exports.deletePost= async function(req,res,next){
    try{
        let found_post=await db.Post.findById(req.params.postID)
        console.log(found_post)
        await found_post.remove();
        return res.status(200).json(found_post)
    }catch(e){
        return next(e);

    }
}

exports.unlikePost=async function(req,res,next){
   
}

exports.likePost=async function(req,res,next){
    try{
        let found_post=await db.Post.findById(req.params.postID);
        console.log("found post",found_post);
        let numOfLikes=found_post["numOfLikes"]+1;
        let likes=found_post["likes"]
        likes.push(req.params.userID)
        console.log("likes and num",likes,numOfLikes)
        updated_post=await db.Post.updateOne({_id:req.params.postID},{$set:{numOfLikes,likes}})
        return res.status(200).json(updated_post);
    }catch(e){
        return next(e);
    }
}