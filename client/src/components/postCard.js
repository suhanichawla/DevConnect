import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {likePost,commentOnPost,deleteComment} from '../store/actions/posts'

class PostCard extends Component {
  constructor(){
    super()
    this.state={
      showComments:false,
      userComment:""
    }
  }
  likePost=async(postid)=>{
    console.log("liking post wth id",postid)
    await this.props.likePost(postid)
    console.log("liked")
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  changeCommentVisiblity=()=>{
    this.setState({showComments:!this.state.showComments})
  }
  commentPost=async(postid)=>{
    if(this.state.userComment.length>0){
      await this.props.commentOnPost(postid,this.state.userComment)
      console.log("commented")
      this.setState({userComment:""})
    }
    
  }
  render() {
      var {data,onDelete}=this.props
      console.log("data has posttt",data)
      var isLiked=data.likes.includes(data.user._id)
      var comments=data.comments.length==0 ? <p>No comments </p> :
      data.comments.map((el)=>{
        console.log("data comment is ",el)
        if(el.userID._id==this.props.userID){
          return <li>
            
            <span>
          {el.userID.name} says {el.comment} 
          <i onClick={()=>this.props.deleteComment(data._id,el._id)} style={{color:"red"}} class="fa fas fa-trash onClick"></i>
          </span></li>
        }else{
          return <li><span>
          {el.userID.name} says {el.comment}
          </span></li>
        }
        
      })
      // console.log("myposttt",data)
    return (
      <div className="card postcard" style={{width: "18rem"}}>
        {onDelete && <div className="postDeleteDiv">
        <i onClick={()=>onDelete(data._id)} class="fa fas fa-trash onclick"></i>
        </div>}
        <img src={data.image} height="50%" width="100px" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.user.name}</h5>
          <p className="card-text">{data.caption}</p>
          <p className="card-text">
            <span style={{display:"flex",justifyContent:"space-around"}}>
            <i onClick={()=>this.likePost(data._id)} style={{color:isLiked ? "red" : "grey",cursor:"pointer"}} class="fa far fa-heart fa-lg"></i>
            {data.numOfLikes} likes
            <i onClick={this.changeCommentVisiblity} class="fa far fa-comments fa-lg onclick"></i>
            {/* onClick={()=>this.commentPost(data._id)} */}
            {data.numOfComments} Comments
            </span>
            {this.state.showComments && 
              <>
              <ul>
              {comments}
              </ul>
              <input onChange={this.handleChange} value={this.state.userComment} name="userComment" type="text" placeholder="your comment" />
              <button className="onclick" className="onClick" onClick={()=>this.commentPost(data._id)}>Comment</button>
              </>
            }
            </p>
        </div>
      </div>
      // <div style={{height:"200px", width:"400px",backgroundColor:"beige"}}>
      //     <p>{data.circle.name}</p>
      //     <div>
      //         <img src={data.image} height="100px" width="100px"/>
      //     </div>
      //     <p>{data.user.name}</p>
      //     <p>{data.caption}</p>
      //     {onDelete &&
      //       <button onClick={()=>onDelete(data._id)}>Delete</button>
      //     }
      // </div>
    );
  }
}



      
export default withRouter(connect(null,{likePost,deleteComment,commentOnPost})(PostCard));