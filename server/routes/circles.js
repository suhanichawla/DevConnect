var express=require("express")
const router=express.Router({ mergeParams: true })
const {joinCircle}=require("../handlers/circles")


router.get("/:circleID/join",joinCircle)
// router.get("/:circleID/leave",leaveCircle)



module.exports=router