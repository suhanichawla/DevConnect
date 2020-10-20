import React,{Component} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {logout} from "../store/actions/auth"
class Navbar extends Component{
    logout= e=>{
        e.preventDefault();
        this.props.logout();
    }
    render(){
        return(
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Link to="/" className="navbar-brand">
                        <img src="" alt="logo home" height="50px" width="200px"/>
                    </Link>
                    </div>
                    {this.props.currentUser.isAuth ?( 
                        <ul className="nav navbar-nav navbar-right">
                           <li>
                            <Link
                            to={`/profile`}
                            >
                            Profile
                            </Link>
                            </li>
                            <li><a onClick={this.logout}>LoGoUt</a></li>
                        </ul>
                    ):
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/signin">Signin</Link></li>
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

export default connect(mapStateToProps,{logout})(Navbar);