import React, { Component } from 'react';
import {authUser} from '../store/actions/auth'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { apiCall } from '../services/api';
import womanlaptop from '../assets/womanlaptop.png'
class Signup extends Component {
    constructor(props){
        super()
        this.state={
            email:"",
            name:"",
            password:"",
            dob:"",
            gender:"",
            contact:0,
            profilePic:"",
            image:null
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    handleFileSelector=(e)=>{
       // console.log(e.target.files[0])
        this.setState({image:e.target.files[0]})
    }
    async uploadImage(){
        const data=new FormData()
        data.append("file",this.state.image)
        data.append("upload_preset","SCNSite")
        data.append("cloud_name","brainless2000")
        var res=await apiCall("post","https://api.cloudinary.com/v1_1/brainless2000/image/upload",data)
        console.log("response",res.secure_url)
        this.setState({profilePic:res.secure_url})
    }
    async handleSubmit(e){
        e.preventDefault();
        await this.uploadImage()
        console.log(authUser("signup"))
        let {image, ...body} = this.state;
        console.log(body)
        this.props.authUser("signup",body).then(()=>{
           this.props.history.push("/")
        })
        .catch(()=>{
            return;
        })
    }

  render() {
    return (
      <>
      <div style={{textAlign:"center", marginTop:"2vh"}}>
            <h2>Sign Up Here!</h2>
            </div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        
          <div style={{width:"50%",marginRight:"5vw",display:"flex",flexDirection:"column",justifyContent:"flex-start", marginTop:"2vh"}}>
            
              <img src={womanlaptop} />
          </div>
          <div style={{width:"50%", marginTop:"2vh",marginRight:"2vw",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div class="container">
  <form class="form-horizontal" onSubmit={this.handleSubmit}>
  <div class="form-group">
      <label class="control-label" for="name">Name:</label>
      <div class="col-sm-10">
        <input onChange={this.handleChange} type="text" class="form-control" id="name" placeholder="Enter your name" name="name" />
      </div>
    </div>
    <div class="form-group">
      <label class="control-label" for="contact">Contact number:</label>
      <div class="col-sm-10">
        <input onChange={this.handleChange} type="number" class="form-control" id="contact" placeholder="Enter your contact number" name="contact" />
      </div>
    </div>
    <div class="form-group">
      <label class="control-label" for="email">Email:</label>
      <div class="col-sm-10">
        <input onChange={this.handleChange} type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
      </div>
    </div>
    <div class="form-group">
      <label class="control-label" for="pwd">Password:</label>
      <div class="col-sm-10">          
        <input onChange={this.handleChange} type="password" class="form-control" id="pwd" placeholder="Enter password" name="password" />
      </div>
    </div>
    <div class="form-group">
      <label class="control-label" for="dob">Date of birth:</label>
      <div class="col-sm-10">          
        <input onChange={this.handleChange} type="date" class="form-control" id="dob" placeholder="Enter date of birth" name="dob" />
      </div>
    </div>
    <div class="form-group">
      <label class="control-label" for="gender">Gender:</label>
      <div class="col-sm-10">          
        <input onChange={this.handleChange} type="text" class="form-control" id="gender" placeholder="Enter gender" name="gender" />
      </div>
    </div>
    <div class="form-group">
      <label class="control-label" for="pic">Profile pic:</label>
      <div class="col-sm-10">          
        <input onChange={this.handleFileSelector} type="file" class="form-control" id="pic" placeholder="Enter password" name="profilePic" />
      </div>
    </div>
    <br></br>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</div>
          </div>
      </div>
     </>
    );
  }
}



export default withRouter(connect(null,{authUser})(Signup));