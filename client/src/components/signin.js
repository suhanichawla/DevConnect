import React, { Component } from 'react';
import {authUser} from '../store/actions/auth'
import {fetchUserPosts} from '../store/actions/posts'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Signin extends Component {
        constructor(props){
            super()
            this.state={
                email:"",
                password:"",
            }
            this.handleChange=this.handleChange.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
        }
        componentDidMount(){
            // console.log(fetchPosts)
            // console.log(authUser)
            // console.log("props",this.props)
            // this.props.fetchPosts().then(()=>{
            //     console.log("here hi")
            // })
        }
        handleChange(e){
            this.setState({[e.target.name]:e.target.value})
        }
    
        handleFileSelector=(e)=>{
           // console.log(e.target.files[0])
            this.setState({image:e.target.files[0]})
        }

        async handleSubmit(e){
            e.preventDefault();
            this.props.authUser("signin",this.state).then(()=>{
               this.props.history.push("/")
            })
            .catch(()=>{
                return;
            })
        }
    
      render() {
        return (
          <div style={{display:"flex"}}>
              <div style={{width:"50%"}}>
    
              </div>
              <div style={{width:"50%"}}>
              <div class="container">
      <form class="form-horizontal" onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Email:</label>
          <div class="col-sm-10">
            <input onChange={this.handleChange} type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="pwd">Password:</label>
          <div class="col-sm-10">          
            <input onChange={this.handleChange} type="password" class="form-control" id="pwd" placeholder="Enter password" name="password" />
          </div>
        </div>
        <div class="form-group">        
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    </div>
              </div>
          </div>
         
    );
  }
}



export default withRouter(connect(null,{authUser})(Signin));