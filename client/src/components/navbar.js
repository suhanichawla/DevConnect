import React,{Component} from "react"
import {Link,withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {logout} from "../store/actions/auth"

import logo from '../assets/Dev-connect-logoyay.png'
class Navbar extends Component{
    logout= async (e)=>{
        try{
            e.preventDefault();
            await this.props.logout()
            this.props.history.push("/")
        }catch(e){
            console.log("Come error occured")
        }
        

    }
    render(){
        console.log("path",this.props.location.pathname)
        return(
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="logo home" height="50px"/>
                    </Link>
                    </div>
                    {this.props.currentUser.isAuth ?( 
                        <ul className="nav navbar-nav navbar-right">
                           {this.props.location.pathname!="/" &&
                                <li>
                                <Link
                                to={`/`}
                                >
                                Feed
                                </Link>
                                </li>
                               
                            } 
                            {this.props.location.pathname!="/profile" &&
                             <li>
                                <Link
                                to={`/profile`}
                                >
                                Profile
                                </Link>
                                </li>  
                            }
                            <li><a style={{color:"white"}} className="onClick" onClick={this.logout}>Logout</a></li>
                        </ul>
                    ):
                    <ul className="nav navbar-nav navbar-right">
                        {this.props.location.pathname!="/" && <li><Link to="/">Home</Link></li>}
                        {this.props.location.pathname!="/signup" && <li><Link to="/signup">Signup</Link></li>}
                        {this.props.location.pathname!="/signin" &&  <li><Link to="/signin">Signin</Link></li>}
                    </ul>
                    }
                </div>
            </nav>
        )
    }
}
function mapStateToProps(reduxState){
    return {
        currentUser:reduxState.currentUser
    }
}

export default withRouter(connect(mapStateToProps,{logout})(Navbar));