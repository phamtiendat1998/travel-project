import { REGISTER_USER } from "./../constants/actionType";
let regUser = {};

const userRegReducer = (state = regUser, action ) => {
    switch (action.type) {
        case REGISTER_USER:
            let nextState = action.UserRegister;
            return nextState;
        default: return {...state};
    }
}

export default userRegReducer
