import { api } from "../common"
import { CreateArticleLocal, UpdateArticleLocal, CreateArticleSchool, UpdateArticleSchool } from "../../types/articles"

export const articleLocal = () => {
    return api.get('/articles/local/')
}

export const createArticleLocal = ({
    data
} : {
    data : CreateArticleLocal
}) => {
    return api.post('/articles/local/', data)
}

export const updateArticleLocal = ({
    id, data
} : {
    id: string, data: UpdateArticleLocal
}) => {
    return api.post(`/articles/local/${id}/`, data)
}

export const partialUpdateArticleLocal = ({
    id, data
} : {
    id: string, data: UpdateArticleLocal
}) => {
    return api.patch(`/articles/local/${id}/`, data)
}

export const deleteArticleLocal = ({
    id
} : {
    id: string
}) => {
    return api.delete(`/articles/local/${id}/`)
}

export const articleLocalDetail = ({
    id
} : {
    id: string
}) => {
    return api.get(`/articles/local/${id}/`)
}

export const articleSchool = () => {
    return api.get('/articles/school/')
}

export const createArticleschool = ({
    data
} : {
    data : CreateArticleSchool
}) => {
    return api.post('/articles/school/', data)
}

export const updateArticleschool = ({
    id, data
} : {
    id: string, data: UpdateArticleSchool
}) => {
    return api.post(`/articles/school/${id}/`, data)
}

export const partialUpdateArticleSchool = ({
    id, data
} : {
    id: string, data: UpdateArticleSchool
}) => {
    return api.patch(`/articles/school/${id}/`, data)
}

export const deleteArticleSchool = ({
    id
} : {
    id: string
}) => {
    return api.delete(`/articles/school/${id}/`)
}

export const articleSchoolDetail = ({
    id
} : {
    id: string
}) => {
    return api.get(`/articles/school/${id}/`)
}