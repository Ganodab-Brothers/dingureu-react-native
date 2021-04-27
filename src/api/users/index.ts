import { api } from "../common";
import { UserToken, UserRegister } from "../../types/users";
import snakecaseKeys from "snakecase-keys"

export const userToken = ({
    data
} : {
    data: UserToken
}) => {
    return api.post('/token', data)
}

export const userRegister = ({
    data
} : {
    data: UserRegister
}) => {
    return api.post('/users/register', snakecaseKeys(data))
}

export const userMe = () => {
    return api.get('/users/me')
}