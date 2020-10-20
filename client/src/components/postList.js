import React, { Component } from 'react';
import PostCard from './postCard'
export default class PostList extends Component {
  render() {
    console.log("rerenderrr",this.props.posts)
    var postlist=this.props.posts ? this.props.posts.map(el=>{
        return <PostCard data={el}/>
    }):<div>hii</div>
    return (
        
      <div> 
          textInComponent 
            <ul>
                {postlist}
            </ul>
          </div>
    );
  }
}
