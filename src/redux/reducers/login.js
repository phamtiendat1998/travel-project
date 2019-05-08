import { LOGIN_USER } from "./../constants/actionType";
let LoginUser = {};

const userLoginReducer = (state = LoginUser, action) => {
    switch (action.type) {
        case LOGIN_USER:
            let nextState = action.UserLogin;
            return nextState;
        default: return { ...state };
    }
}

export default userLoginReducer;