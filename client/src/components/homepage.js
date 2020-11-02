import React from "react"
import {Link} from "react-router-dom"
import UserInfo from './userinfo'
import Feed from './feed'
import '../index.css'
import introimg from '../assets/woman-removebg-preview.png'
const Homepage=({currentUser})=>{
    if(!currentUser.isAuth){
        return(
        <div className="home-hero">
            <div style={{display:"flex"}}>
            <div style={{width:"50%"}}>
                <img src={introimg} />
            </div>
            <div style={{width:"50%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <h1>Whats happenening?</h1>
            <h4> New to Dev-Connect?</h4>
            <Link to="/signup" className="btn btn-primary">
                Signup
            </Link>
            </div>
            </div>
        </div>
        )
    }else{
        return(
            <div id="mainpage" style={{display:"flex"}}>
                <div id="one" style={{textAlign:"center",width:"30%",backgroundColor:"#f4f4f2",minHeight:"100vh"}}>
                   <UserInfo />
                </div>
                <div id="two" class="container" style={{width:"70%",padding:"0px",backgroundColor:"#edffea",minHeight:"100vh"}}>
                    <Feed/>
                </div>
            </div>
            
        )
    }
}
export default Homepage;