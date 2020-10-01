import React, { Component } from 'react';
import intro from '../Layer 2 (1).png'
export default class componentName extends Component {
  render() {
    return (
    <div style={{width:"50%"}}>
        <img src={intro} height="300px" width="400px"></img>
        <p>this is mine</p>
        <p> this is too</p>
    </div>
    );
  }
}
