import React, { Component } from 'react'
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import {addPost} from '../store/actions/posts'
import { apiCall, imageUploadCall} from '../services/api';
class AddPost extends Component {
    constructor(){
        super()
        this.state = {
            caption: "",
            image: "",
            circle:"",
            category:"fun",
            imageFile:null
        };
    }
    handleFileSelector=(e)=>{
        // console.log(e.target.files[0])
         this.setState({imageFile:e.target.files[0]})
     }
     handleChange=(e) =>{
         console.log("target value",e.target.value)
        this.setState({[e.target.name]:e.target.value})
      }
     async uploadImage(){
         console.log("state at this point is",this.state)
         const data=new FormData()
         data.append("file",this.state.imageFile)
         data.append("upload_preset","SCNSite")
         data.append("cloud_name","brainless2000")
         var res=await imageUploadCall("post","https://api.cloudinary.com/v1_1/brainless2000/image/upload",data)
         console.log("response",res.secure_url)
         this.setState({image:res.secure_url})
     }
     
     handleSubmit= async(e)=>{
         e.preventDefault()
        await this.uploadImage()
        let {imageFile, ...body} = this.state;
        console.log("body is",body)
        
        await this.props.addPost(body)
        this.props.closeModal()


     }
    render() {
        var optionList=this.props.userCircles.map((el)=>{
            return <option value={el.name}>{el.name} Circle</option>
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="email">Add a post:</label>
                    <div class="col-sm-10">
                        <input onChange={this.handleChange} type="text" class="form-control" id="postcontent" placeholder="Whatya thinking?" name="caption" />
                    </div>
                    <br></br>
                    <div class="col-sm-10">          
                        <input onChange={this.handleFileSelector} type="file" class="form-control" id="pic" placeholder="Choose file here" name="imageFile" />
                    </div>
                </div>
                <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                <label className="control-label">
                Select category:
                <select name="category" value={this.state.category} onChange={this.handleChange}>
                  <option value="fun">Fun</option>
                  <option value="project">Project</option>
                  <option value="resources">Resources</option>
                </select>
              </label>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                <label className="control-label">
                Select circle:
                <select name="circle" value={this.state.circle} onChange={this.handleChange}>
                <option value="null">Select an option</option>
                  {optionList}
                </select>
              </label>
              </div>

              </div>
              <div class="form-group">        
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary">Post Now!</button>
            </div>
            </div>

            </div>
            </form>
            </div>
        )
    }
}

export default withRouter(connect(null,{addPost})(AddPost));