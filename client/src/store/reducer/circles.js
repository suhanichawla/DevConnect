import {JOIN_CRICLE,LEAVE_CIRCLE,GET_USER_CIRCLES} from "../actionTypes"



export default (state={},action)=>{
    switch(action.type){
        case JOIN_CRICLE:
            return []

        case LEAVE_CIRCLE:
            return []

        case GET_USER_CIRCLES:
            return [...action.circles]
        default:
            return state;
    }
}