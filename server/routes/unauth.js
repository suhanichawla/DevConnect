var express=require("express")
const router=express.Router({ mergeParams: true })
const {getCirclePosts}=require("../handlers/unauth")

router.post("/posts",getCirclePosts)

module.exports=router