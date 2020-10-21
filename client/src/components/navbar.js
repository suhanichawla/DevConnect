import React,{Component} from "react"
import {Link,withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {logout} from "../store/actions/auth"
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

export default withRouter(connect(mapStateToProps,{logout})(Navbar));