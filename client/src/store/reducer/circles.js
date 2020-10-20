import {JOIN_CRICLE,LEAVE_CIRCLE,GET_USER_CIRCLES,GET_CIRCLES} from "../actionTypes"

var defaultState={
    userCircles:[],
    allCircles:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case JOIN_CRICLE:
            return state

        case LEAVE_CIRCLE:
            return state

        case GET_USER_CIRCLES:
            return {...state,userCircles:action.circles}
        
        case GET_CIRCLES:
            return {...state,allCircles:action.circles}
        default:
            return state;
    }
}