import {apiCall} from "../../services/api"
import {JOIN_CRICLE, LEAVE_CIRCLE, GET_USER_CIRCLES,GET_CIRCLES} from "../actionTypes"
import {addError,removeError} from "../actions/error"


export const joinCircle=response=>({
    type:JOIN_CRICLE,
})

export const leaveCircle=response=>({
  type:LEAVE_CIRCLE,
})

export const getUsersCircles=circles=>({
    type:GET_USER_CIRCLES,
    circles
})

export const getAllCircles=circles=>({
  type:GET_CIRCLES,
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

  export const getUserCircles =()=> (dispatch, getState) => {
    let {currentUser}=getState();
    let id=currentUser.user._id;
      return apiCall("get", `/api/${id}/circle`)
        .then(res => {
          console.log("user circlesss response",res);
          dispatch(getUsersCircles(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
    // };
  };

  export const getCircles =()=> (dispatch, getState) => {
    console.log("calling inside get circles")
      return apiCall("get", `/api/circles`)
        .then(res => {
          console.log("circlesss response",res);
          dispatch(getAllCircles(res));
        })
        .catch(err => {
          console.log(err)
          dispatch(addError(err.message));
        });
    // };
  };