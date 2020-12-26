import React, { Component } from 'react'

export default class MemberList extends Component {
    constructor(){
        super()
    }
    goBack=()=>{
        this.props.backToProfile();
    }
    render() {
        var memberList=this.props.members.map((el)=>{
            return <li>
                <img src={el.profilePic} height="60px" width="60px" /> 
                <p>{el.name}</p>
            </li>
        })
        
        return (
            <div>
                <button onClick={()=>this.goBack()}>Go back</button>
                <ul>
                    {memberList}
                </ul>
            </div>
        )
    }
}
