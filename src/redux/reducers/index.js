import { combineReducers } from "redux";
import userLoginReducer from "./login";

const rootReducer = combineReducers(
    {
        UserLogin: userLoginReducer
    }
)

export default rootReducer;