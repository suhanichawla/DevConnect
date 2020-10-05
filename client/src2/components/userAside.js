import React from "react";
import defaultImg from "../images/default_prof.png"

const UserAside=({profilePic,username})=>{
    return(
        <aside className="col-sm-2">
            <div className="panel panel-default">
                <div className="panel-body">
                    <img  className="img timeline-img" width="200" height="200" src={profilePic || defaultImg} alt={username}/>
                </div>
            </div>
        </aside>
    )
}

export default UserAside