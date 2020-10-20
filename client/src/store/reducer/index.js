import {combineReducers} from "redux";
import currentUser from "./currentUser"
import errors from "./errors";
import posts from './posts'
import circles from './circles'

const rootReducer=combineReducers({
    currentUser,
    errors,
    posts,
    circles
})

export default rootReducer;