import React, { Component } from 'react';
import {FlexboxGrid,HelpBlock,Container, Content,Form,FormGroup,ControlLabel,Panel,FormControl,Button,ButtonToolbar} from 'rsuite'

export default class SignUpForm extends Component {
  render() {
    return (
      <div style={{width:"50%"}}>
        <Content style={{padding:"50px"}}>
        <Form fluid>
    <FormGroup>
      <ControlLabel>Username</ControlLabel>
      <FormControl name="name" />
      <HelpBlock>Required</HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <FormControl name="email" type="email" />
      <HelpBlock tooltip>Required</HelpBlock>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Password</ControlLabel>
      <FormControl name="password" type="password" />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Textarea</ControlLabel>
      <FormControl rows={5} name="textarea" componentClass="textarea" />
    </FormGroup>
    <FormGroup>
      <ButtonToolbar>
        <Button appearance="primary">Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </FormGroup>
  </Form>
      </Content>
      </div>
    );
  }
}
