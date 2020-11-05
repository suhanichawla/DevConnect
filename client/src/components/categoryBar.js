import React, { Component } from 'react';

export default class CategoryBar extends Component {
    handleClick=(name)=>{
      var lis=document.getElementsByClassName("nav-link")
      console.log(lis)
      for(var i=0;i<lis.length;i++){
        if(lis[i].classList.contains("active")){
              lis[i].classList.remove("active")
            }
      }
        var li=document.getElementById(name)
        li.classList.add("active")
        this.props.changeTab(name)
      }
  render() {
    return (
        <ul class="nav nav-tabs" style={{justifyContent: 'space-around'}}>
            <li class="nav-item onClick"  onClick={()=>this.handleClick("project")}>
            <a class="nav-link active" id="project" href="#">Projects</a>
            </li>
            <li class="nav-item"  onClick={()=>this.handleClick("resources")}>
            <a class="nav-link onClick" id="resources" href="#" >Resources</a>
            </li>
            <li class="nav-item"  onClick={()=>this.handleClick("fun")}>
            <a class="nav-link onClick" id="fun"href="#">Fun</a>
            </li>
        </ul>
    );
  }
}
