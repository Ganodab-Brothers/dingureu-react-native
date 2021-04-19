import { api } from "../common";
import { UserToken, UserRegister } from "../../types/users";

export const userToken = (D: UserToken) => {
    return api.post('/user/token', D)
}

export const userRegister = (D: UserRegister) => {
    return api.post('/user/register', D)
}