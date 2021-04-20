import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { env } from '../config/env'

export const api = axios.create({
    baseURL: env.baseUrl
})

export const getToken = async () => {
    return await AsyncStorage.getItem("token")
}

api.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem("token")
        token && (config.headers['Authorization'] = `Bearer ${token}`)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)