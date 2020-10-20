import {LOAD_USER_POSTS,LOAD_FEED_POSTS} from "../actionTypes"


var defaultState={
    userPosts:[],
    feedPosts:[]
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case LOAD_USER_POSTS:
            return {...state,userPosts:action.posts}

        case LOAD_FEED_POSTS:
            return  {...state,feedPosts:action.posts}
        default:
            return state;
    }
}