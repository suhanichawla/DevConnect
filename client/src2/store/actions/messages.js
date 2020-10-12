
import {apiCall} from "../../services/api"
import {addError} from "./error"
import {LOAD_MESSAGES,REMOVE_MESSAGES, REMOVE_ERROR} from "../actionTypes"

export const loadMessages=messages=>({
    type:LOAD_MESSAGES,
    messages
})

export const remove=id=>({
  type:REMOVE_MESSAGES,
  id
})

export const fetchMessages = () => {
    return dispatch => {
      return apiCall("get", "/api/messages")
        .then(res => {
          console.log(res);
          dispatch(loadMessages(res));
        })
        .catch(err => {
          dispatch(addError(err.message));
        });
    };
  };

  export const postMessages = text => (dispatch, getState)=>{
    let {currentUser}=getState();
    let id=currentUser.user.id;
      return apiCall("post", `/api/users/${id}/messages`,{text})
        .then(res => {})
        .catch(err => {
          dispatch(addError(err.message));
        });
  };

  export const removeMessages=(user_id,message_id)=>{
    return dispatch => {
      return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
        .then(res => {
          dispatch(remove(message_id));
        })
        .catch(err => {
          dispatch(addError(err.message));
        });
  }
}