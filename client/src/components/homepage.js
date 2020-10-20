import React from "react"
import {Link} from "react-router-dom"
import UserInfo from './userinfo'
import Feed from './feed'
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
            <div id="mainpage" style={{display:"flex"}}>
                <div id="one" style={{textAlign:"center",width:"30%",backgroundColor:"blue",minHeight:"100vh"}}>
                   <UserInfo />
                </div>
                <div id="two" class="container" style={{width:"70%",padding:"0px",backgroundColor:"black",minHeight:"100vh"}}>
                    <Feed/>
                </div>
            </div>
            
        )
    }
}
export default Homepage;