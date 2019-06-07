import { combineReducers } from "redux";
import userLoginReducer from "./login";
import PlacesReducer from './places';
import FromPlaceReducer from './fromPlace';
import ToPlacesReducer from './toPlaces';

const rootReducer = combineReducers(
    {
        UserLogin: userLoginReducer,
        Places: PlacesReducer,
        FromPlace: FromPlaceReducer,
        ToPlaces: ToPlacesReducer,
    }
)

export default rootReducer;