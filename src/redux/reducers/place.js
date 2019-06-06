import { SAVE_LIST_PLACE } from "../constants/actionType";
let DSP = [];
const PlaceReducer = (state = DSP, action) => {
    switch (action.type) {
        case SAVE_LIST_PLACE:
            let nextState = action.PlaceList;
            return nextState;
        default: return { ...state };
    }
}
export default PlaceReducer;