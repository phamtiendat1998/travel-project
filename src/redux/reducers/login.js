import { ACTION } from "./../constants/actionType";
let loginUser = {};

const userLoginReducer = (state = loginUser, action) => {
    switch (action.type) {
        case ACTION.LOGIN_USER:
            let nextState = action.UserLogin;
            return nextState;
        default: return { ...state };
    }
}

export default userLoginReducer
