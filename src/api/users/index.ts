import { api } from "..";
import { UserAuth, UserRegister } from "../../types/users";

export const userAuth = (D: UserAuth) => {
    return api.post('/user/token', D)
}

export const userRegister = (D: UserRegister) => {
    return api.post('/user/register', D)
}