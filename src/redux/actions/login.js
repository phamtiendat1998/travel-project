import { ACTION } from "./../constants/actionType";

export const actLoginUser = (UserLogin) => {
    return {
        type: ACTION.LOGIN_USER,
        UserLogin
    }
}