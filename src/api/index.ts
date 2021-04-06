import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const baseURL = ""

export const api = axios.create({
    baseURL: baseURL
})

export const getToken = async () => {
    return await AsyncStorage.getItem("token")
}

api.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem("token")
        if(token){
            config.headers['Authorization'] = `Token ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)