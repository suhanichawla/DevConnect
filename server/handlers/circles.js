const db=require("../models")

exports.joinCircle=async function(req,res,next){
    try{
        console.log("req body",req.body)
        let foundCircle=await db.Circle.findById(req.params.circleID)
        foundCircle.members.push(req.params.userID)
        await foundCircle.save();
        let foundUser=await db.User.findById(req.params.userID)
        foundUser.circles.push(req.params.circleID)
        await foundUser.save();
        return res.status(200).json(foundCircle);
    }catch(e){
        next(e)
    }
}

exports.leaveCircle=async function(req,res,next){
    try{
        console.log("req body",req.body)
        let foundCircle=await db.Circle.findById(req.params.circleID)
        const index = foundCircle.members.indexOf(req.params.userID);
        if (index > -1) {
            foundCircle.members.splice(index, 1);
        }
        //for( var i = 0; i < foundCircle.members.length; i++){ if ( foundCircle.members[i] === req.params.userID) { foundCircle.members.splice(i, 1); }}
        console.log(foundCircle.members)
        await foundCircle.save();
        let foundUser=await db.User.findById(req.params.userID)
        const index2 = foundUser.circles.indexOf(req.params.circleID);
        if (index2 > -1) {
            foundUser.circles.splice(index2, 1);
        }
        //for( var i = 0; i < foundCircle.members.length; i++){ if ( foundCircle.members[i] === req.params.circleID) { foundCircle.members.splice(i, 1); }}
        await foundUser.save();
        return res.status(200).json(foundCircle);        
    }catch(e){
        next(e)
    }
}

exports.getCircles=async function(req,res,next){
    try{
        let foundUser=await db.User.findById(req.params.userID)
            .populate("circles",{
                members:true,
                name:true
            })               
        return res.status(200).json(foundUser.circles);
    }catch(e){
        return next(e)
    }
}