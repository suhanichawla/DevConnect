import React, { Component } from 'react';
import {fetchFeedPosts,deletePost} from '../store/actions/posts'
import {getCircleMembers} from '../store/actions/circles'
import {connect} from "react-redux"
import CategoryBar from './categoryBar';
import PostList from './postList'

class Feed extends Component {
    constructor(){
        super()
        this.state={
            currentTab:"project"
        }
    }
    handleDelete=async(postid)=>{
        console.log("reached here with postid",postid)
        await this.props.deletePost(postid)
        console.log("deleted post")
    }
    handleTabChange=(tabname)=>{
        this.setState({currentTab:tabname})
       // console.log("now state is ",this.state.currentTab)
    }
    componentDidMount(){
        //console.log("getting called")
        this.props.getCircleMembers("5f9f1c23a223fa1cb1785d31")
        this.props.fetchFeedPosts()
    }

    render() {
        const {posts,user}=this.props
        console.log("user is",user)
       console.log("postsssss",this.props.posts)
        return (
            <>
           <CategoryBar changeTab={this.handleTabChange}/>
           <PostList deletePost={this.handleDelete} userID={user._id} posts={this.props.posts[this.state.currentTab]}/>
           </>
        );
    }
}

function mapStateToProps(reduxState){
    return {
        posts:reduxState.posts.feedPosts,
        user:reduxState.currentUser.user
    }
}

export default connect(mapStateToProps,{fetchFeedPosts,deletePost,getCircleMembers})(Feed);