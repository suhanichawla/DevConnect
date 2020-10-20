import {apiCall} from "../../services/api"
import {JOIN_CRICLE, LEAVE_CIRCLE, GET_USER_CIRCLES} from "../actionTypes"
import {addError,removeError} from "../actions/error"


export const joinCircle=response=>({
    type:JOIN_CRICLE,
})

export const leaveCircle=response=>({
  type:LEAVE_CIRCLE,
})

export const getUserCircles=circles=>({
    type:GET_USER_CIRCLES,
    circles
})

export const joinCircleRequest =(circleid)=> (dispatch, getState) => {
    // return dispatch => {
      let {currentUser}=getState();
      let id=currentUser.user._id;
      console.log("user id is",currentUser.user._id)
      return apiCall("get", `/api/${id}/circle/${circleid}/join`)
        .then(res => {
          console.log("response",res);
          dispatch(joinCircle(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
    // };
  };

  export const leaveCircleRequest =(circleid)=> (dispatch, getState) => {
    // return dispatch => {
      let {currentUser}=getState();
      let id=currentUser.user._id;
      console.log("user id is",currentUser.user._id)
      return apiCall("get", `/api/${id}/circle/${circleid}/leave`)
        .then(res => {
          console.log("response",res);
          dispatch(leaveCircle(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
    // };
  };

  export const joinCircleRequest =()=> (dispatch, getState) => {
    // return dispatch => {
      let {currentUser}=getState();
      let id=currentUser.user._id;
      console.log("user id is",currentUser.user._id)
      return apiCall("get", `/api/${id}/circle`)
        .then(res => {
          console.log("response",res);
          dispatch(getUserCircles(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
    // };
  };