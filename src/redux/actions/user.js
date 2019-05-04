import { actTypeUser } from "./../constants/actionType";

export const actLoginUser = (userName, passWord) => {
    return {
        type: actTypeUser.LOGIN_USER,
        userName,
        passWord
    }
}