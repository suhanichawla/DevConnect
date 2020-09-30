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

exports.likePost=async function(req,res,next){
    try{
        let found_post=await db.Post.findById(req.params.postID);
        let likes=found_post["likes"].filter((el)=>{
            console.log("el is",el);
            return el!=req.params.userID
        })
        console.log(likes);
        let numOfLikes;
        if(likes.length<found_post["likes"].length){
            numOfLikes=found_post["numOfLikes"]-1;
        }else{
            numOfLikes=found_post["numOfLikes"]+1;
            likes.push(req.params.userID)
        }
        updated_post=await db.Post.findOneAndUpdate({_id:req.params.postID},{$set:{numOfLikes,likes}},{ returnOriginal: false })
        return res.status(200).json(updated_post)
    }catch(e){
        return next(e);
    }
}

exports.commentOnPost=async function(req,res,next){
    try{
        let found_post=await db.Post.findById(req.params.postID);
        let comments=found_post["comments"]
        let obj={userID:req.params.userID,comment:req.body.comment}
       // console.log(obj);
        comments.push(obj)
        let numOfComments=comments.length;
       // console.log("comments is ",comments)
        updated_post=await db.Post.findOneAndUpdate({_id:req.params.postID},{$set:{comments,numOfComments}},{new: true})
      //  console.log("updated post",updated_post);
        return res.status(200).json(updated_post)
    }catch(e){
        return next(e);
    }
}

exports.deleteComment=async function(req,res,next){
    try{
        let found_post=await db.Post.findById(req.params.postID);
        let comments=found_post["comments"].filter((el)=>{
            return el._id!=req.params.commentID || el.userID!=req.params.userID
        })
        let numOfComments=comments.length;
        updated_post=await db.Post.findOneAndUpdate({_id:req.params.postID},{$set:{comments,numOfComments}},{new: true})
        return res.status(200).json(updated_post)
    }catch(e){
        return next(e);
    }
}