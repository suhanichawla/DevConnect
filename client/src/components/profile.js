import React, { Component } from 'react';
import {connect} from "react-redux"
import {fetchUserPosts} from "../store/actions/posts"
import {getUserCircles,getCircles} from '../store/actions/circles'
class Profile extends Component {
  componentDidMount(){
    this.props.fetchUserPosts()
    this.props.getUserCircles()
    this.props.getCircles()
  }
  render() {
    console.log("user posts",this.props.posts)
    console.log("all circles",this.props.allCircles)
    console.log("user circles",this.props.userCircles)
    return (
      <div> textInComponent </div>
    );
  }
}


function mapStateToProps(reduxState){
  return {
      posts:reduxState.posts.userPosts,
      allCircles:reduxState.circles.allCircles,
      userCircles:reduxState.circles.userCircles
  }
}


export default connect(mapStateToProps,{getUserCircles,getCircles,fetchUserPosts})(Profile);