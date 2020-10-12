import {LOAD_USER_POSTS} from "../actionTypes"



export default (state=[],action)=>{
    switch(action.type){
        case LOAD_USER_POSTS:
            return [...action.posts]
        default:
            return state;
    }
}