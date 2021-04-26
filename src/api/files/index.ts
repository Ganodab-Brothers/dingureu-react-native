import { api } from "../common"
import axios, { AxiosResponse, AxiosError } from "axios"

export const fileUpload = ({
    fileName,
    data,
    onSuccess,
    onFailure
} : { 
    fileName: string, 
    data: FormData, 
    onSuccess: (res: AxiosResponse) => void, 
    onFailure: (err: AxiosError) => void
}) => {
    api.put("/files/upload/", {
        object_name: fileName
    })
    .then(res => {
        for (const [key, value] of Object.entries(res.data.fields)){
            data.append(key, value)
        }
        axios.post(res.data.url, data)
        .then(res => {
            onSuccess(res)
        })
        .catch(err => {
            onFailure(err)
        })
    })
}