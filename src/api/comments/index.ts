import { api } from "../common"
import { CreateCommentLocal, UpdateCommentLocal, CreateCommentSchool, UpdateCommentSchool } from "../../types/comments"

export const createCommentLocal = ({
    data
} : {
    data: CreateCommentLocal
}) => {
    return api.post('/comments/local/', data)
}

export const updateCommentLocal = ({
    id, data
} : {
    id: string
    data: UpdateCommentLocal
}) => {
    return api.put(`/comments/local/${id}/`, data)
}

export const partialUpdateCommentLocal = ({
    id, data
} : {
    id: string
    data: UpdateCommentLocal
}) => {
    return api.patch(`/comments/local/${id}/`, data)
}

export const deleteCommentLocal = ({
    id
} : {
    id: string
}) => {
    return api.delete(`/comments/local/${id}/`)
}

export const createCommentSchool = ({
    data
} : {
    data: CreateCommentSchool
}) => {
    return api.post('/comments/school/', data)
}

export const updateCommentSchool = ({
    id, data
} : {
    id: string
    data: UpdateCommentSchool
}) => {
    return api.put(`/comments/school/${id}/`, data)
}

export const partialUpdateCommentSchool = ({
    id, data
} : {
    id: string
    data: UpdateCommentSchool
}) => {
    return api.patch(`/comments/school/${id}/`, data)
}

export const deleteCommentSchool = ({
    id
} : {
    id: string
}) => {
    return api.delete(`/comments/school/${id}/`)
}