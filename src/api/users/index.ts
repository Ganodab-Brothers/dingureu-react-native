import { api } from "../common";
import { UserToken, UserRegister } from "../../types/users";

export const userToken = ({
    data
} : {
    data: UserToken
}) => {
    return api.post('/token/', data)
}

export const userRegister = ({
    data
} : {
    data: UserRegister
}) => {
    return api.post('/users/register/', data)
}

export const userMe = () => {
    return api.get('/users/me/')
}