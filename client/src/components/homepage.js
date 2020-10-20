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
            <div id="mainpage" style={{display:"flex"}}>
                <div id="one" style={{width:"30%",backgroundColor:"blue",height:"10vh"}}>
                   
                </div>
                <div id="two" class="container" style={{width:"70%",backgroundColor:"black",height:"10vh"}}>
                    
                </div>
            </div>
            
        )
    }
}
export default Homepage;