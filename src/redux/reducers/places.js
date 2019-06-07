import { ACTION } from "../constants/actionType";
let Places = [];
const PlacesReducer = (state = Places, action) => {
    switch (action.type) {
        case ACTION.SAVE_PLACES:
            let nextState = action.Places;
            return nextState;
        default: return [...state];
    }
}
export default PlacesReducer;