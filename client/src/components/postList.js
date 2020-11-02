import React, { Component } from 'react';
import PostCard from './postCard'

export default class PostList extends Component {
  render() {
    console.log("rerenderrr",this.props.posts)
    var postlist=this.props.posts ? this.props.posts.map(el=>{
        if(el!=null && el.user._id == this.props.userID){
          return <PostCard onDelete={this.props.deletePost} data={el}/>
        }else{
          return <PostCard data={el}/>
        }
        
    }):<div>hii</div>
    return (
        
      <div> 
          Posts
            <ul>
                {postlist}
            </ul>
          </div>
    );
  }
}
