import React, { Component } from 'react';
import {connect} from "react-redux"
import {fetchUserPosts} from "../store/actions/posts"
import {getUserCircles,getCircles,getCircleMembers} from '../store/actions/circles'
import CircleSection from './circleSection'
import PostSection from './postSection'
import {deletePost} from '../store/actions/posts'
import PostList from './postList'
// import currentUser from '../store/reducer/currentUser';
import PersonalInfo from './personalinfo'
import SectionNav from './sectionNav'
import MemberList from './memberList';
class Profile extends Component {
  constructor(){
    super()
    this.state={
      circleSection:true,
      showCircleMembers:false,
      circleMembers:[]
    }
  }
  componentDidMount(){
    this.props.fetchUserPosts()
    this.props.getUserCircles()
    this.props.getCircles()
  }
  handleDelete=async(postid)=>{
    console.log("reached here with postid",postid)
    await this.props.deletePost(postid)
    console.log("deleted post")
  }
  handleTabChange=async (value)=>{
    await this.setState({circleSection:value})
    console.log(this.state.circleSection)
  }
  showCircleMembers=async(circleid)=>{
    console.log("coming here wth circle id",circleid);
    await this.props.getCircleMembers(circleid)
    this.setState({showCircleMembers:true,circleMembers:this.props.members})
  }

  backToProfile=()=>{
    this.setState({showCircleMembers:false})
  }
  render() {
    // console.log("user posts",this.props.posts)
    // console.log("all circles",this.props.allCircles)
     console.log("user circles",this.props.userCircles)
     var dispalyedSection= this.state.circleSection ? <CircleSection showCircleMembers={this.showCircleMembers} userCircles={this.props.userCircles} allCircles={this.props.allCircles} userID={this.props.currentUser._id}/> : <PostList deletePost={this.handleDelete} userID={this.props.currentUser._id} posts={this.props.posts}/>
     if(this.state.showCircleMembers){
       return <MemberList backToProfile={this.backToProfile} members={this.props.members} />
     }
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
      userCircles:reduxState.circles.userCircles,
      members:reduxState.circles.circleMembers
  }
}


export default connect(mapStateToProps,{getUserCircles,getCircleMembers,getCircles,fetchUserPosts,deletePost})(Profile);