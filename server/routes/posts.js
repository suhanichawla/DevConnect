var express=require("express")
const router=express.Router({ mergeParams: true })
const {addPost,deletePost,likePost,unlikePost}=require("../handlers/posts")


router.post("/",addPost)

router.route("/:postID")
      .delete(deletePost);

router.get("/:postID/like",likePost)

module.exports=router