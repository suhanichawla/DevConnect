import React, { Component } from 'react';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import MyNavbar from './navbar';
import 'rsuite/dist/styles/rsuite-default.css';
import InnerNav from './innerNav'
export default class Main3 extends Component {
  render() {
    return (
        <Container>
        <Sidebar>Sidebar</Sidebar>
        <Container>
          <Header>
          <MyNavbar/>
          <InnerNav/>
          </Header>
          <Content>
              
          </Content>
          <Footer>Footer</Footer>
        </Container>
      </Container>
    );
  }
}
