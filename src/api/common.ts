import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { env } from '../config/env'
import { setItemToAsync } from '../utils/AsyncStorage'

export const api = axios.create({
    baseURL: env.baseUrl
})

export const getAccessToken = async () => {
    return await AsyncStorage.getItem("access")
}

export const getRefreshToken = async () => {
    return await AsyncStorage.getItem("refresh")
}

api.interceptors.request.use(
    async config => {
        const accessToken = await AsyncStorage.getItem("access")
        accessToken && (config.headers['Authorization'] = `Bearer ${accessToken}`)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    async res => {
        return res
    },
    async error => {
        const originalRequest = error.config
        const refreshToken = await getRefreshToken()
        if(error.response.status===401 && !originalRequest._retry){
            originalRequest._retry = true
            return api.post('/token/refresh/', {
                refresh: refreshToken
            })
            .then(res => {
                setItemToAsync("access", res.data["access"])
                return api(originalRequest)
            })
        }
        return Promise.reject(error)
    }
)