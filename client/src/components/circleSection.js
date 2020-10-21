import React, { Component } from 'react';

export default class CircleSection extends Component {
    
  render() {
      //console.log("useer id",this.props.userID);
    var mycircles=this.props.userCircles ? this.props.userCircles.map((el)=>{
        var ismember=el.members.includes(this.props.userID)
        return <li>
            <p>{el.name} Circle</p>
            <p>{el.members.length} Members</p>
            <button>{ismember ? "Leave" : "Join"}</button>
        </li>
    }): <div>Your circles will appear here</div>
    // console.log("all",this.props.allCircles)
    // console.log("user",this.props.userCircles)
    var leftcircles= this.props.allCircles.filter(el=>{
        let value=this.props.userCircles.some(circle => circle.name === el.name)
       // console.log("value is",value)
        return !value
    })

   // console.log("all circles",allcircles);
    var allcircles=leftcircles.map((el)=>{
        var ismember=el.members.includes(this.props.userID)
        return <li>
            <p>{el.name} Circle</p>
            <p>{el.members.length} Members</p>
            <button>{ismember ? "Leave" : "Join"}</button>
        </li>
    })
    return (
        <>
      <div> Your circles </div>
      <ul>
          {mycircles}
      </ul>
      <div>All circles</div>
      <ul>
          {allcircles || allcircles.length==0 ? <div>Looks like you followed everything</div> : allcircles}
      </ul>
      </>
    );
  }
}
