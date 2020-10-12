var express=require("express")
const router=express.Router({ mergeParams: true })
const {addPost,deletePost,likePost,commentOnPost,deleteComment,getPosts,userCirclePosts}=require("../handlers/posts")

router.route("/")
      .post(addPost)
      .get(getPosts)

router.get("/feed",userCirclePosts)

router.route("/:postID")
      .delete(deletePost);

router.get("/:postID/like",likePost)

router.post("/:postID/comment",commentOnPost)

router.delete("/:postID/comment/:commentID",deleteComment)

module.exports=router