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
        foundCircle.posts.push({postID:post.id,postCategory:post.category});
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

exports.userCirclePosts=async function(req,res,next){
    try{
        console.log("coming in this func with id",req.params.userID)
        let user=await db.User.findById(req.params.userID)
        console.log("user? ",user.circles)
        var responseObj={}
        for(var i=0;i<user.circles.length;i++){
            console.log("circle id",user.circles[i])
            var circle=await db.Circle.findById(user.circles[i]).populate({
                path: 'posts.postID',
                model: 'Post',
                populate: {
                  path: 'circle',
                  model: 'Circle',
                  select: 'name'
                }
              })
            for(var j=0;j<circle.posts.length;j++){
                var category=circle.posts[j].postCategory
                console.log("populated circle post ",circle.posts[j])
                console.log("resp??",responseObj[category])
                if(responseObj[category]){
                    var currvalue=responseObj[category]
                    console.log("currvalue",currvalue)
                    currvalue.push(circle.posts[j].postID)
                    responseObj[category]=currvalue
                }else{
                    console.log("so ill come here?")
                    responseObj[category]=[circle.posts[j].postID]
                    console.log("response obj now is ",responseObj)
                }
            }
           
           
            
       }
       console.log(responseObj)
       res.status(200).json(responseObj);
    }catch(e){
        console.log("err is",e)
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


exports.getPosts=async function(req,res,next){
    try{
        let foundUser=await db.User.findById(req.params.userID)
            .populate("posts")               
        return res.status(200).json(foundUser.posts);
    }catch(e){
        return next(e)
    }
}