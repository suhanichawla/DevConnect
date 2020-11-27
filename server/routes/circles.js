var express=require("express")
const router=express.Router({ mergeParams: true })
const {joinCircle,leaveCircle,getCircles,getCircleMembers}=require("../handlers/circles")


router.get("/:circleID/join",joinCircle)
router.get("/:circleID/leave",leaveCircle)
router.get("/",getCircles)
router.get("/:circleID/members",getCircleMembers)

module.exports=router