var express=require("express")
const router=express.Router({ mergeParams: true })
const {getCircles}=require("../handlers/unauth")

// router.post("/posts",getCirclePosts)

router.get("/circles",getCircles)

module.exports=router