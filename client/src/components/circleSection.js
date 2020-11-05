import React, { Component } from 'react';
import {joinCircleRequest,leaveCircleRequest} from '../store/actions/circles'
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'


class CircleSection extends Component {
    handleJoin=async(circleid)=>{
        await this.props.joinCircleRequest(circleid)
        console.log("user added to circle")
    }
    handleLeave=async(circleid)=>{
        await this.props.leaveCircleRequest(circleid)
        console.log("user removed from circle")
    }
    
  render() {
      //console.log("useer id",this.props.userID);
    var mycircles=this.props.userCircles ? this.props.userCircles.map((el)=>{
        var ismember=el.members.includes(this.props.userID)
        //console.log("img",el)
        return <li class="circleLi">
            <p>{el.name} Circle</p>
            <img style={{borderRadius:"50%",height:"200px", width:"200px"}} src={el.image} height="60px" width="60px" />
            <p><i class="fa fas fa-users"></i> {el.members.length} Members</p>
            <button className="small-button onClick" onClick={()=>ismember ? this.handleLeave(el._id) : this.handleJoin(el._id)}>{ismember ? "Leave" : "Join"}</button>
        </li>
    }): <div>Your circles will appear here</div>
     console.log("all",this.props.allCircles)
    // console.log("user",this.props.userCircles)
    var leftcircles= this.props.allCircles.filter(el=>{
        let value=this.props.userCircles.some(circle => circle.name === el.name)
       // console.log("value is",value)
        return !value
    })
    console.log("left citcle",leftcircles)

   // console.log("all circles",allcircles);
    var allcircles=leftcircles.map((el)=>{
        var ismember=el.members.includes(this.props.userID)
        return <li class="circleLi">
            <p>{el.name} Circle</p>
            <img style={{borderRadius:"50%",height:"200px", width:"200px"}} src={el.image}  />
            <p><i class="fa fas fa-users"></i> {el.members.length} Members</p>
            <button className="small-button onClick" onClick={()=>ismember ? this.handleLeave(el._id) : this.handleJoin(el._id)}>{ismember ? "Leave" : "Join"}</button>
        </li>
    })
    console.log("all circles li list",allcircles)
    return (
        <>
      <div style={{padding:"50px",textAlign:"center"}}> Your circles </div>
      <div style={{textAlign:"center"}}>
      <ul className="circleList">
          {mycircles}
      </ul>
      </div>
      <div style={{padding:"50px",textAlign:"center"}}>All circles</div>
      <div style={{textAlign:"center"}}>
      <ul className="circleList">
          {allcircles && allcircles.length==0 ? <div className="extraHeading">Looks like you followed everything</div> : allcircles}
      </ul>
      </div>
      </>
    );
  }
}


export default withRouter(connect(null,{joinCircleRequest,leaveCircleRequest})(CircleSection));