
import {apiCall} from "../../services/api"
import {addError} from "./error"
import {LOAD_USER_POSTS,LOAD_FEED_POSTS,CREATE_POST, DELETE_POST,UPDATE_POST} from "../actionTypes"

export const loadPosts=posts=>({
    type:LOAD_USER_POSTS,
    posts
})

export const loadFeedPosts=posts=>({
  type:LOAD_FEED_POSTS,
  posts
})

export const createPost=post=>({
  type:CREATE_POST,
  post
})

export const removePost=post=>({
  type:DELETE_POST,
  post
})

export const updatePost=post=>({
  type:UPDATE_POST,
  post
})

// export const remove=id=>({
//   type:REMOVE_MESSAGES,
//   id
// })

export const fetchUserPosts =()=> (dispatch, getState) => {
    // return dispatch => {
      let {currentUser}=getState();
      let id=currentUser.user._id;
      console.log("user id is",currentUser.user._id)
      return apiCall("get", `/api/${id}/post`)
        .then(res => {
          dispatch(loadPosts(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
    // };
  };

  export const likePost=(postid)=>(dispatch, getState) =>{
    let {currentUser}=getState();
      let userid=currentUser.user._id;
      console.log("user id is",currentUser.user._id)
      return apiCall("get", `/api/${userid}/post/${postid}/like`)
        .then(res => {
          console.log("response for like post",res);
          dispatch(updatePost(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
  } 

  export const deleteComment=(postid,commentid)=>(dispatch,getState)=>{
      let {currentUser}=getState();
      let userid=currentUser.user._id;
      console.log("user id is",currentUser.user._id)
      return apiCall("delete", `/api/${userid}/post/${postid}/comment/${commentid}`)
        .then(res => {
          console.log("response for like post",res);
          dispatch(updatePost(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
  }

  export const commentOnPost=(postid,comment)=>(dispatch, getState) =>{
    let {currentUser}=getState();
      let userid=currentUser.user._id;
      console.log("user id is",currentUser.user._id)
      return apiCall("post", `/api/${userid}/post/${postid}/comment`,{comment})
        .then(res => {
          console.log("response for comment post",res);
          dispatch(updatePost(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
  } 

  export const fetchFeedPosts=()=> (dispatch, getState) => {
    //  return dispatch => {
      let {currentUser}=getState();
      let userid=currentUser.user._id;
     console.log("user id is",currentUser.user._id)
      return apiCall("get", `/api/${userid}/post/feed`)
        .then(res => {
          console.log("response for ftech feed posts",res);
          dispatch(loadFeedPosts(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
    //  };
  };

  export const addPost =(data)=> (dispatch, getState) => {
    // return dispatch => {
      let {currentUser}=getState();
      let id=currentUser.user._id;
      console.log("user id is",currentUser.user._id)
      var postData=data
      return apiCall("post", `/api/${id}/post/`,postData)
        .then(res => {
          console.log("response from api",res);
          //that post is returned, so basically we need to add it in the feed state!!
          dispatch(createPost(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
    // };
  };

  export const deletePost =(postid)=> (dispatch, getState) => {
    // return dispatch => {
      let {currentUser}=getState();
      let id=currentUser.user._id;
      console.log("user id is",currentUser.user._id)
      return apiCall("delete", `/api/${id}/post/${postid}`)
        .then(res => {
          console.log("response from api",res);
          //that post is returned, so basically we need to add it in the feed state!!
          dispatch(removePost(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
    // };
  };

//   export const postMessages = text => (dispatch, getState)=>{
//     let {currentUser}=getState();
//     let id=currentUser.user.id;
//       return apiCall("post", `/api/users/${id}/messages`,{text})
//         .then(res => {})
//         .catch(err => {
//           dispatch(addError(err.message));
//         });
//   };

//   export const removeMessages=(user_id,message_id)=>{
//     return dispatch => {
//       return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
//         .then(res => {
//           dispatch(remove(message_id));
//         })
//         .catch(err => {
//           dispatch(addError(err.message));
//         });
//   }
// }