var express=require("express")
const router=express.Router({ mergeParams: true })
const {joinCircle,leaveCircle,getCircles}=require("../handlers/circles")


router.get("/:circleID/join",joinCircle)
router.get("/:circleID/leave",leaveCircle)
router.get("/",getCircles)


module.exports=router