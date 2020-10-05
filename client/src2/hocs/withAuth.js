import React,{Component} from "react"
import {connect} from "react-redux"

export default function withAuth(ComponentToBeRendered){
    class Authenticate extends Component{
        componentWillMount(){
            if(this.props.isAuth==false){
                this.props.history.push("/signin")
            }
        }
        componentDidUpdate(nextProps){
            if(nextProps.isAuth==false){
                this.props.history.push("/signin")
            } 
        }
        render(){
            return <ComponentToBeRendered {...this.props}/>
        }
    }
    function mapStateToProps(state){
        return{
            isAuth:state.currentUser.isAuth
        }
    }
    return connect(mapStateToProps)(Authenticate);
}

