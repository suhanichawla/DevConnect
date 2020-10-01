//import React,{Component} from 'react'
import { Navbar,Dropdown,Nav ,Icon} from 'rsuite';

// const InnerNav =()=>  {
//     <Nav appearance="tabs" justified>
//         <Nav.Item active icon={<Icon icon="home" />}  >Home</Nav.Item>
//         <Nav.Item>News</Nav.Item>
//         <Nav.Item>Solutions</Nav.Item>
//         <Nav.Item>Products</Nav.Item>
//         <Nav.Item>About</Nav.Item>
//   </Nav>
// }

import React, { Component } from 'react';

export default class InnerNav extends Component {
  render() {
    return (
        <Nav appearance="tabs" justified>
        <Nav.Item active icon={<Icon icon="home" />}  >Home</Nav.Item>
        <Nav.Item >News</Nav.Item>
        <Nav.Item>Solutions</Nav.Item>
        {/* <Nav.Item>Products</Nav.Item>
        <Nav.Item>About</Nav.Item> */}
  </Nav>
    );
  }
}

