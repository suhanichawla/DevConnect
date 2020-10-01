import React, { Component } from 'react';
import IntroDiv from './introdiv'
import 'rsuite/dist/styles/rsuite-default.css';
import SignUpForm from './signupForm';
import MyNavbar from './navbar';
import {Container} from 'rsuite'
export default class Main2 extends Component {
  render() {
    return (
        <div className="show-fake-browser navbar-page">
        <Container>
          <MyNavbar />
          <div style={{height:"7vh"}}></div>
          <div style={{display:"flex",flexWrap:"wrap"}}>
          <SignUpForm />
            <IntroDiv />
          
          </div>
        </Container>
        </div>
    );
  }
}
