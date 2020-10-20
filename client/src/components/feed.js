import React, { Component } from 'react';
import {fetchFeedPosts} from '../store/actions/posts'
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
    handleTabChange=(tabname)=>{
        this.setState({currentTab:tabname})
       // console.log("now state is ",this.state.currentTab)
    }
    componentDidMount(){
        //console.log("getting called")
        this.props.fetchFeedPosts()
    }

    render() {
        const {posts}=this.props
        console.log(posts)
       console.log("postsss",this.props.posts[this.state.currentTab])
        return (
            <>
           <CategoryBar changeTab={this.handleTabChange}/>
           <PostList posts={posts[this.state.currentTab]}/>
           </>
        );
    }
}

function mapStateToProps(reduxState){
    return {
        posts:reduxState.posts.feedPosts
    }
}

export default connect(mapStateToProps,{fetchFeedPosts})(Feed);