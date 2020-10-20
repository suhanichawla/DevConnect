import React, { Component } from 'react';
import {fetchFeedPosts} from '../store/actions/posts'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class Test extends Component {

    componentDidMount(){
        console.log(fetchFeedPosts)
        this.props.fetchFeedPosts().then(()=>{
            console.log("hi")
        })
    }
  render() {
    return (
      <div> textInComponent </div>
    );
  }
}
export default withRouter(connect(null,{fetchFeedPosts})(Test));