import { api } from "../common"

export const articleLocal = () => {
    return api.get('/articles/local/')
}

export const articleSchool = () => {
    return api.get('/articles/school/')
}