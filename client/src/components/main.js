import React from "react"
import {Switch,Route,withRouter,Redirect} from "react-router-dom"
import {connect} from "react-redux";
import {authUser} from "../store/actions/auth"
import {removeError} from "../store/actions/error"

import Homepage from './homepage'
import Signup from "./signup";
import Signin from "./signin";
import Test from './test'
import Profile from './profile'

const Main= props=>{
    const {authUser,errors,removeError,currentUser} = props;
    console.log(currentUser)
    return(
        <div className>
            <Switch>
    <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props}/>}></Route>
    <Route exact path="/signup" render={props => <Signup {...props}/>}></Route>
    <Route exact path="/test" render={props => <Test {...props}/>}></Route>
    <Route exact path="/signin" render={props => <Signin {...props}/>}></Route>
    <Route exact path="/profile" render={props => <Profile {...props}/>}></Route>
    {/* <Route exact path="/signup"  render={props => <Authform onAuth={authUser} removeError={removeError} error={errors} buttontext="Sign me up!" signup heading="Join createSpace" {...props}/>}></Route>
    <Route exact path="/signin"  render={props => <Authform onAuth={authUser} removeError={removeError} error={errors} buttontext="Log in" heading="Welcome back" {...props}/>}></Route> */}
    {/* <Route
          path="/users/:id/messages/new"
          component={withAuth(MessageForm)}
        /> */}
            </Switch>
        </div>
    )
}
function mapStateToProps(state){
    return({
        currentUser:state.currentUser,
        errors:state.errors

    })
}

export default withRouter(connect(mapStateToProps,{authUser,removeError})(Main));
