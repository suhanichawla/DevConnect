import React,{Component} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {getUserCircles} from '../store/actions/circles'

class UserInfo extends Component{
    componentDidMount(){
        this.props.getUserCircles()
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
                <img src={currentUser.user.profilePic} style={{height:"200px",width:"200px",borderRadius:"50%"}}/>
            </div>
            <div class="basicInfo" >
                <p>{currentUser.user.name}</p>
                <p>{currentUser.user.email}</p>
            </div>
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

