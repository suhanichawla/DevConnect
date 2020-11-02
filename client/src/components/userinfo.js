import React,{Component} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {getUserCircles} from '../store/actions/circles'
import Modal from './modal'
import AddPost from './addpost'
class UserInfo extends Component{
    constructor(){
        super()
        this.state={
            modal:false
        }
    }
    componentDidMount(){
        this.props.getUserCircles()
    }

    modalOpen() {
        this.setState({ modal: true });
    }

    modalClose() {
    this.setState({
        modal: false
    });
    }
    
    render(){
        var {currentUser,userCircles}=this.props;
        console.log("cupp",userCircles)
        var circlelist=userCircles.map(el=>{
            return <li>{el.name}</li>
        })
        return(
            <>
            <div class="image" style={{marginTop:"20px",padding:"20px"}}>
                <img src={currentUser.user.profilePic} style={{height:"200px",width:"200px",borderRadius:"50%",border:"2px solid black"}}/>
            </div>
            <div class="basicInfo" >
                <p>Hi {currentUser.user.name}!</p>
                <p>Logged in as <br></br>{currentUser.user.email}</p>
            </div>
            <div class="form-group">        
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" onClick={e => this.modalOpen(e)} class="btn btn-primary">New Post <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                </div>
            </div>
            <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
          <h2>Hello Modal</h2>
          <AddPost userCircles={userCircles} closeModal={e => this.modalClose(e)}/>
        </Modal>
            <div class="circles">
                <p>Your circles</p>
                <ul>
                   {circlelist}
                </ul>
            </div>
            </>

        )
    }
}
function mapStateToProps(reduxState){
    return {
        currentUser:reduxState.currentUser,
        userCircles:reduxState.circles.userCircles
    }
}

export default connect(mapStateToProps,{getUserCircles})(UserInfo);



