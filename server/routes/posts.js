var express=require("express")
const router=express.Router({ mergeParams: true })
const {addPost,deletePost}=require("../handlers/posts")


router.post("/",addPost)

router.route("/:postID")
      .delete(deletePost);


module.exports=router