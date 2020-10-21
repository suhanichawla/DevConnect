import React, { Component } from 'react';

export default class PostCard extends Component {
  render() {
      var {data}=this.props
      console.log("myposttt",data)
    return (
      <div style={{height:"200px", width:"400px",backgroundColor:"beige"}}>
          <p>{data.circle.name}</p>
          <div>
              {/* <img src={data.image} */}
          </div>
          <p>{data.user.name}</p>
          <p>{data.caption}</p>
      </div>
    );
  }
}
