import { combineReducers } from "redux";
import userLoginReducer from "./login";
import PlaceReducer from './place';
import FromPlaceReducer from './fromPlace';

const rootReducer = combineReducers(
    {
        UserLogin: userLoginReducer,
        PlaceList: PlaceReducer,
        FromPlace: FromPlaceReducer
    }
)

export default rootReducer;