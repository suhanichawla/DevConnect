import React, { Component } from 'react';

export default class CategoryBar extends Component {
    handleClick=(name)=>{
        console.log("atleast this is getting fired")
        this.props.changeTab(name)
      }
  render() {
    return (
        <ul class="nav nav-tabs" style={{justifyContent: 'space-around',backgroundColor:"beige"}}>
            <li class="nav-item" id="project" onClick={()=>this.handleClick("project")}>
            <a class="nav-link active" href="#">Projects</a>
            </li>
            <li class="nav-item" id="resources" onClick={()=>this.handleClick("resources")}>
            <a class="nav-link" href="#" >Resources</a>
            </li>
            <li class="nav-item" id="fun" onClick={()=>this.handleClick("fun")}>
            <a class="nav-link" href="#">Fun</a>
            </li>
        </ul>
    );
  }
}
