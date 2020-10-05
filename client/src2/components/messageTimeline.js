import React from "react"
import MessageList from "../containers/messageList"
import UserAside from "../components/userAside"
const MessageTimeline= props=>{
    return(
        <div className="row">
            <UserAside profilePic={props.profilePic}
            username={props.username}/>
            <MessageList />
        </div>
    )
}

export default MessageTimeline;