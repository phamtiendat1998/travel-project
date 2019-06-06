import { SAVE_FROM_PLACE, REMOVE_FROM_PLACE } from "../constants/actionType";
let FromPlace = {};
const FromPlaceReducer = (state = FromPlace, action) => {
    switch (action.type) {
        case SAVE_FROM_PLACE:
            let nextState = action.FromPlace;
            return nextState;
        case REMOVE_FROM_PLACE:
            return FromPlace;
        default: return { ...state };
    }
}
export default FromPlaceReducer;