import React, { Component } from 'react'
import "../style.css"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {getUserCircles} from '../store/actions/circles'
import io from "socket.io-client";
const socket = io();

class Chat extends Component {
    constructor(){
        super()
        this.state={
            chatVisiblity:false,
            room:"",
            message:"",
            chatList:[],
            currentRoom:"",
            userlist:[]
        }
    }
    componentDidMount(){
        this.props.getUserCircles();
        socket.on("message",message=>{
            console.log("msg is ",message)
            var chatList=[...this.state.chatList]
            console.log(chatList)
            chatList.push(message)
            
            this.setState({chatList,message:""})
            var chatMessages=document.getElementById("chatdivscroll")
            // this.outputMessage(message)
            chatMessages.scrollTop = chatMessages.scrollHeight;
        
        })
    }

    handleChange=(e) =>{
       this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log("room",this.state.room)
        if(this.state.room.length!=0){
            socket.emit("joinRoom",{username:this.props.currentUser.name,room:this.state.room})
            this.setState({chatVisiblity:true})
            socket.on("roomUsers",({room,users})=>{
                this.setState({currentRoom:room,userlist:users})
            })
        }
    }

    leaveRoom=()=>{
        this.setState({chatVisiblity:false})
    }

    sendMessage=(e)=>{
        e.preventDefault()
        socket.emit("chatMessage",this.state.message)

    }

    render() {
        var chatmessages=this.state.chatList.map(msg=>{
            return <div class="message"><p class="meta">{msg.username} <span>{msg.time}</span></p>
            <p class="text">
                {msg.text}
            </p> </div>
        })
        //console.log(this.state.userlist)
        var users=this.state.userlist.map((el)=>{
            return <li>{el.username}</li>
        })
        var rooms=this.props.userCircles.map((el)=>{
            return <option value={el.name}>{el.name}</option>
        })
        if(!this.state.chatVisiblity){
            return (
                <div class="chatdiv">
                <div class="join-container">
                <header class="join-header">
                    <h1><i class="fa fa-smile"></i> ChatCord</h1>
                </header>
                <form style={{border:"2px solid #dadada"}} class="form-horizontal" onSubmit={this.handleSubmit}>
                <div class="form-group">
                <div>
                            <label class="control-label" style={{color:"black",margin:"2vw"}} for="room">Choose Your Room:</label>
                            <select onChange={this.handleChange} name="room" id="room">
                                <option value="">select an option</option>
                                {rooms}
                            </select>
                        </div>
                </div>
                <br></br>
                <div class="form-group">        
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn">Join Chat</button>
                </div>
                </div>
            </form>
            </div>
            </div>
            )
        }else{
            return(
                <div class="chatdiv">
                <div class="chat-container">
                    <header class="chat-header">
                    <h1><i class="fa fa-smile"></i> ChatCord</h1>
                    <a onClick={this.leaveRoom} class="btn">Leave Room</a>
                    </header>
                    <main class="chat-main">
                    <div class="chat-sidebar">
                        <h3><i class="fa fa-comments"></i> Room Name:</h3>
                        <h2 id="room-name">{this.state.currentRoom}</h2>
                        <h3><i class="fa fa-users"></i> Users</h3>
                        <ul id="users">
                            {users}
                        </ul>
                    </div>
                    <div class="chat-messages" id="chatdivscroll">
                                    <div class="message">
                                        <p class="meta">Brad <span>9:12pm</span></p>
                                        <p class="text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                                            repudiandae.
                                        </p>
                                    </div>
                                    <div class="message">
                                        <p class="meta">Mary <span>9:15pm</span></p>
                                        <p class="text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                                            repudiandae.
                                        </p>
                                    </div>
                                    {chatmessages}
                    </div>
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                    </main>
                    <div class="chat-form-container">
                    <form id="chat-form" onSubmit={this.sendMessage}>
                        <input
                        onChange={this.handleChange}
                        id="msg"
                        type="text"
                        name="message"
                        value={this.state.message}
                        placeholder="Enter Message"
                        required
                        autocomplete="off"
                        />
                        <button type="submit" class="btn"><i class="fa fa-paper-plane"></i> Send</button>
                    </form>
                    </div>
                </div>
                </div>
            )
        }
    }
}

function mapStateToProps(reduxState){
    return {
        userCircles:reduxState.circles.userCircles,
        currentUser:reduxState.currentUser.user
    }
  }
  
  
  export default withRouter(connect(mapStateToProps,{getUserCircles})(Chat));