import React, { Component } from 'react';
import { Container, Header, Content, Footer, Sidebar ,Navbar,FlexboxGrid,Panel,Form,FormControl,FormGroup,ControlLabel,Button,ButtonToolbar} from 'rsuite';
import {  HelpBlock,Nav,Icon,Dropdown } from 'rsuite';
import MyNavbar from './navbar'
import IntroDiv from './introdiv'
import 'rsuite/dist/styles/rsuite-default.css';
import SignInForm from './signinForm';
export default class Main extends Component {
  render() {
    return (
    <div className="show-fake-browser navbar-page">
    <Container>
      <MyNavbar />
      <div style={{height:"7vh"}}></div>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        <IntroDiv />
      <SignInForm />
      </div>
    </Container>
    </div>
    );
  }
}
