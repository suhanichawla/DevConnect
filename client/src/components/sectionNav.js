import React, { Component } from 'react';

export default class SectionNav extends Component {
    handleClick=(value,name)=>{
      var lis=document.getElementsByClassName("nav-link")
      console.log(lis)
      for(var i=0;i<lis.length;i++){
        if(lis[i].classList.contains("active")){
              lis[i].classList.remove("active")
            }
      }
        var li=document.getElementById(name)
        li.classList.add("active")
        this.props.changeTab(value)
      }
  render() {
    return (
        <ul class="nav nav-tabs" style={{justifyContent: 'space-around'}}>
            <li class="nav-item"  onClick={()=>this.handleClick(true,"circle")}>
            <a class="nav-link active" id="circle" href="#">Circles</a>
            </li>
            <li class="nav-item" onClick={()=>this.handleClick(false,"posts")}>
            <a class="nav-link"  id="posts" href="#" >Posts</a>
            </li>
        </ul>
    );
  }
}
