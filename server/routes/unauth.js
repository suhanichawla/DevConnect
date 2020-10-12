var express=require("express")
const router=express.Router({ mergeParams: true })
const {getCirclePosts}=require("../handlers/unauth")
const {userCirclePosts} = require("../handlers/posts")
router.get("/posts",userCirclePosts)

module.exports=router