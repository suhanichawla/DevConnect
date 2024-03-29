import {apiCall,setTokenHeader} from "../../services/api"
import {SET_CURRENT_USER} from "../actionTypes"
import {addError,removeError} from "../actions/error"
import jwtDecode from "jwt-decode"
export function setCurrentUser(user){
    console.log(user);
    return{
        type:SET_CURRENT_USER,
        user
    }
}

export function setAuthorizationToken(token){
    setTokenHeader(token)
}

export function authUser(type,userData){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall("post",`/api/auth/${type}`,userData)
            .then(({token})=>{
                console.log("token",token)
                var user=jwtDecode(token)
                console.log("user",user)
                localStorage.setItem("jwtToken",token)
                setAuthorizationToken(token)
                dispatch(setCurrentUser(user));
                dispatch(removeError())
                resolve();
            })
            .catch(err =>{
                console.log("coming here")
                dispatch(addError(err.message))
                reject();
            })
        })
    }
}

export function logout(){
    return dispatch=>{
        localStorage.clear();
        setAuthorizationToken(false)
        dispatch(setCurrentUser({}));
    }
}