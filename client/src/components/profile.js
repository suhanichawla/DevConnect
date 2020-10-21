import React, { Component } from 'react';
import {connect} from "react-redux"
import {fetchUserPosts} from "../store/actions/posts"
import {getUserCircles,getCircles} from '../store/actions/circles'
import CircleSection from './circleSection'
import PostSection from './postSection'
import PostList from './postList'
// import currentUser from '../store/reducer/currentUser';
import PersonalInfo from './personalinfo'
import SectionNav from './sectionNav'
class Profile extends Component {
  constructor(){
    super()
    this.state={
      circleSection:true
    }
  }
  componentDidMount(){
    this.props.fetchUserPosts()
    this.props.getUserCircles()
    this.props.getCircles()
  }
  handleTabChange=async (value)=>{
    await this.setState({circleSection:value})
    console.log(this.state.circleSection)
  }
  render() {
    // console.log("user posts",this.props.posts)
    // console.log("all circles",this.props.allCircles)
     //console.log("user circles",this.props.userCircles)
     var dispalyedSection= this.state.circleSection ? <CircleSection userCircles={this.props.userCircles} allCircles={this.props.allCircles} userID={this.props.currentUser._id}/> : <PostList posts={this.props.posts}/>
    return (
      <div> 
        <PersonalInfo currentUser={this.props.currentUser}/>
        <SectionNav  changeTab={this.handleTabChange}/>
        {dispalyedSection}
      </div>
    );
  }
}


function mapStateToProps(reduxState){
  return {
      currentUser:reduxState.currentUser.user,
      posts:reduxState.posts.userPosts,
      allCircles:reduxState.circles.allCircles,
      userCircles:reduxState.circles.userCircles
  }
}


export default connect(mapStateToProps,{getUserCircles,getCircles,fetchUserPosts})(Profile);