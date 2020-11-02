import {JOIN_CRICLE,LEAVE_CIRCLE,GET_USER_CIRCLES,GET_CIRCLES} from "../actionTypes"

var defaultState={
    userCircles:[],
    allCircles:[]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case JOIN_CRICLE:
            var usercircles= state.userCircles.slice()
            usercircles.push(action.circle)
            console.log("now usercircles is",usercircles)
            return {...state,userCircles:usercircles}

        case LEAVE_CIRCLE:
            var usercircles= state.userCircles.slice()
            var filteredUserCircles=usercircles.filter((element)=>{
                console.log(element._id!==action.circle._id)
                return element._id!==action.circle._id
            })
            console.log("now usercircles is",filteredUserCircles)
            return {...state,userCircles:filteredUserCircles}

        case GET_USER_CIRCLES:
            return {...state,userCircles:action.circles}
        
        case GET_CIRCLES:
            return {...state,allCircles:action.circles}
        default:
            return state;
    }
}