import { LOGIN_USER } from "./../constants/actionType";

export const actLoginUser = (UserLogin) => {
    return {
        type: LOGIN_USER,
        UserLogin
    }
}