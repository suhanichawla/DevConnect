import React,{useState} from 'react';
import {Provider} from "react-redux"
import {configStore} from "../store"
import {BrowserRouter as Router} from "react-router-dom"
// import Navbar from "./Navbar"
import Main from "./main"
// import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
// import jwtDecode from "jwt-decode"
const store=configStore()
function App() {
  // Declare a new state variable, which we'll call "count"

  return(
    <Provider store={store}>
      <Router>
      <div className="appcomp">
        {/* <Navbar /> */}
        <Main/>
      </div>
      </Router>
    </Provider>
  )
}


  

export default App