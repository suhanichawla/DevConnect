import React from "react"
import Moment from "react-moment"
import {Link} from "react-router-dom"
import DefaultImg from "../images/default_prof.png"

const MessageItem=({date,profilePic,isCorrectUser, text,username,removeMessages})=>{
    return(
        <div>
            <li className="list-group-item">
            <img src={profilePic||DefaultImg} alt={username} height="100" width="100" className="img-thumbnail"/>
            <div className="message-area">
                <Link to="/">@{username}</Link>
                <span className="text-muted">
                    <Moment className="text-muted" format="MM DD YYYY">
                        {date}
                    </Moment>
                </span>
                <p>{text}</p>
                {isCorrectUser && 
                <a className="btn btn-danger" onClick={removeMessages}>DELETE</a>
                }
                
            </div>
            </li>
        </div>
    )
}

export default MessageItem;
