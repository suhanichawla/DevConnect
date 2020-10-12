
import {apiCall} from "../../services/api"
import {addError} from "./error"
import {LOAD_USER_POSTS,LOAD_CIRCLE_POSTS} from "../actionTypes"

export const loadPosts=posts=>({
    type:LOAD_USER_POSTS,
    posts
})

export const getCirclePosts=posts=>({
  type:LOAD_CIRCLE_POSTS,
  posts
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
          console.log("response",res);
          dispatch(loadPosts(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
    // };
  };

  export function fetchCirclePosts(circleid) {
     return dispatch => {
      // let {currentUser}=getState();
      // let id=currentUser.user._id;
     // console.log("user id is",currentUser.user._id)
      return apiCall("get", `/api/${circleid}/posts`)
        .then(res => {
          console.log("response",res);
          dispatch(getCirclePosts(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
     };
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