import { ACTION } from "../constants/actionType";
let FromPlace = {};
const FromPlaceReducer = (state = FromPlace, action) => {
    switch (action.type) {
        case ACTION.SAVE_FROM_PLACE:
            let nextState = action.FromPlace;
            return nextState;
        case ACTION.REMOVE_FROM_PLACE:
            return FromPlace;
        default: return { ...state };
    }
}
export default FromPlaceReducer;