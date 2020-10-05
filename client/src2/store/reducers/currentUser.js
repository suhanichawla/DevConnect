import {SET_CURRENT_USER} from "../actionTypes"

const defaultState={
    isAuth:false,
    user:{}
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                isAuth:!!Object.keys(action.user).length,
                user:action.user
            }
        default:
            return state;
    }
}