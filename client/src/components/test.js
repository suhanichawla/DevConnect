import React, { Component } from 'react';
import {fetchCirclePosts} from '../store/actions/posts'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class Test extends Component {

    componentDidMount(){
        console.log(fetchCirclePosts)
        this.props.fetchCirclePosts("5f7315846128224d8dac5114").then(()=>{
            console.log("hi")
        })
    }
  render() {
    return (
      <div> textInComponent </div>
    );
  }
}
export default withRouter(connect(null,{fetchCirclePosts})(Test));