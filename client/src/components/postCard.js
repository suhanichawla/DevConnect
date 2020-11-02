import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {likePost} from '../store/actions/posts'

class PostCard extends Component {
  likePost=async(postid)=>{
    console.log("liking post wth id",postid)
    await this.props.likePost(postid)
    console.log("liked")
  }
  render() {
      var {data,onDelete}=this.props
      // console.log("myposttt",data)
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src={data.image} height="100px" width="100px" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.user.name}</h5>
          <p className="card-text">{data.caption}</p>
          <p className="card-text">
            <span style={{display:"flex",justifyContent:"space-around"}}>
            <i onClick={()=>this.likePost(data._id)} class="fa far fa-heart fa-lg"></i>
            {data.numOfLikes} likes
            <i class="fa far fa-comments fa-lg"></i>
            </span>
            </p>
          <a href="#" className="btn btn-primary">Like</a>
          {onDelete &&
            <button onClick={()=>onDelete(data._id)}>Delete</button>
          }
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



      
export default withRouter(connect(null,{likePost})(PostCard));