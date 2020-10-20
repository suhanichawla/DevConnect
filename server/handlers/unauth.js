const db=require("../models")

// exports.getCirclePosts=async function(req,res,next){
//     try{
//         console.log(req.params.circleID);
//        // var {category}=req.body
//         var postlist=await db.Post.find({circle:req.params.circleID})
//         console.log(postlist)
//         return res.status(200).json(postlist)
//     }catch(e){
//         next(e)
//     }
// }

exports.getCircles=async function(req,res,next){
    try{
        var circleList=await db.Circle.find({})
        //console.log("circle list found is ",circleList)
        return res.status(200).json(circleList)
    }catch(e){
        next(e)
    }
}