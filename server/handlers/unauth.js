const db=require("../models")

exports.getCirclePosts=async function(req,res,next){
    try{
        console.log(req.params.circleID);
        var {category}=req.body
        var postlist=await db.Post.find({circle:req.params.circleID,category:category})
        console.log(postlist)
    }catch(e){
        next(e)
    }
}