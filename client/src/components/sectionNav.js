import React, { Component } from 'react';

export default class SectionNav extends Component {
    handleClick=(value)=>{
        console.log("atleast this is getting fired")
        this.props.changeTab(value)
      }
  render() {
    return (
        <ul class="nav nav-tabs" style={{justifyContent: 'space-around',backgroundColor:"beige"}}>
            <li class="nav-item" id="circle" onClick={()=>this.handleClick(true)}>
            <a class="nav-link active" href="#">Circles</a>
            </li>
            <li class="nav-item" id="posts" onClick={()=>this.handleClick(false)}>
            <a class="nav-link" href="#" >Posts</a>
            </li>
        </ul>
    );
  }
}
