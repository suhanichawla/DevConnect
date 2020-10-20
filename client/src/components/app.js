import React,{useState} from 'react';
import {Provider} from "react-redux"
import {configStore} from "../store"
import {BrowserRouter as Router} from "react-router-dom"
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import jwtDecode from "jwt-decode"
// import Navbar from "./Navbar"
import Main from "./main"
import Navbar from '../../src/components/navbar';
// import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
// import jwtDecode from "jwt-decode"
const store=configStore()
if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken)
  try{
     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  }catch(e){
    store.dispatch(setCurrentUser({}))
  }
}
function App() {
  // Declare a new state variable, which we'll call "count"

  return(
    <Provider store={store}>
      <Router>
      <div className="appcomp">
        <Navbar />
        <Main/>
      </div>
      </Router>
    </Provider>
  )
}


  

export default App