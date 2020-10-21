import React, { Component } from 'react';

export default class PersonalInfo extends Component {
  render() {
      var {currentUser}=this.props

    return (
      <div style={{display:"flex"}}>
          {currentUser && (
              <>
              <div style={{width:"10vw"}}></div>
              <div class="image" style={{marginTop:"20px",padding:"20px"}}>
                <img src={currentUser.profilePic} style={{height:"200px",width:"200px",borderRadius:"50%"}}/>
            </div>
            <div style={{width:"2vw"}}></div>
            <div className="textInfo" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <p>{currentUser.name}</p>
                <p>{currentUser.email}</p>
                <p>{currentUser.contact}</p>
                <p>Born on {currentUser.dob}</p>
            </div>
              </>
          )}
           
      </div>
    );
  }
}
