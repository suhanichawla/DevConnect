import React from "react"
import {Link} from "react-router-dom"
const Homepage=({currentUser})=>{
    if(!currentUser.isAuth){
        return(
        <div className="home-hero">
            <h1>Whats happenening?</h1>
            <h4> New to createSpace?</h4>
            <Link to="/signup" className="btn btn-primary">
                Signup
            </Link>
        </div>
        )
    }else{
        return(
            <div></div>
            // <MessageTimeline profilePic={currentUser.user.profilePic} username={currentUser.user.username}/>
        )
    }
}
export default Homepage;