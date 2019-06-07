import { ACTION } from "../constants/actionType";
let ToPlaceList = [];
const ToPlacesReducer = (state = ToPlaceList, action) => {
    switch (action.type) {
        case ACTION.SAVE_TO_PLACE_LIST:
            let nextState = action.ToPlaceList;
            return nextState;
        case ACTION.REMOVE_TO_PLACE_LIST:
            return ToPlaceList;
        default: return { ...state };
    }
}
export default ToPlacesReducer;