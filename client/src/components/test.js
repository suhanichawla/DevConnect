import React, { Component } from 'react';
import {fetchPosts} from '../store/actions/posts'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class Test extends Component {

    componentDidMount(){
        this.props.fetchPosts().then(()=>{
            console.log("hi")
        })
    }
  render() {
    return (
      <div> textInComponent </div>
    );
  }
}
export default withRouter(connect(null,{fetchPosts})(Test));