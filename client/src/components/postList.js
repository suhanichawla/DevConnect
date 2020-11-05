import React, { Component } from 'react';
import PostCard from './postCard'

export default class PostList extends Component {
  render() {
    console.log("rerenderrr",this.props.posts)
    var postlist=this.props.posts && this.props.posts.length!=0 ? this.props.posts.map(el=>{
        if(el!=null && el.user._id == this.props.userID){
          return <PostCard userID={this.props.userID} onDelete={this.props.deletePost} data={el}/>
        }else{
          return <PostCard userID={this.props.userID} data={el}/>
        }
        
    }):<div class="extraHeading">Looks like there's nothing here yet!</div>
    return (
        
      <div class="bg" style={{padding:"40px"}}> 
            <ul className="postlist">
                {postlist}
            </ul>
          </div>
    );
  }
}
