import {LOAD_USER_POSTS,LOAD_FEED_POSTS,CREATE_POST,DELETE_POST} from "../actionTypes"


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
        case CREATE_POST:
            console.log("post is",action.post)
            var feedcopy=state.feedPosts
            console.log("feedcopy before",feedcopy)
            
            var feed=feedcopy[action.post.category]
            feed.push(action.post)
            feedcopy[action.post.category]=feed
            console.log("feedcopy after",feedcopy)
            // console.log(state.feedPosts)
            // console.log(feedcopy)
            return  {...state,feedPosts:feedcopy}
        case DELETE_POST:
            //updating feed state
            console.log("post is",action.post)
            var feedcopy=state.feedPosts
            console.log("feedcopy before",feedcopy)
            
            var feed=feedcopy[action.post.category]
            console.log("currently feeed list is ",feed)
            // var postlist=feed.filter((el)=>{
            //     return el._id!==action.post._id
            // })
            // feedcopy[action.post.category]=postlist
            // console.log("feedcopy after",feedcopy)

            //updating used posts state
            var userPostsCopy=state.userPosts
            console.log("userposts before",userPostsCopy)
            var userposts=userPostsCopy.filter((el)=>{
                return el._id!==action.post._id
            })
            console.log("userposts after",userposts)
            return  {...state,feedPosts:feedcopy,userPosts:userposts} 
        default:
            return state;
    }
}