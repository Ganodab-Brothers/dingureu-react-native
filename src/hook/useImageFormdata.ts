import { useState, useEffect } from 'react'
import { ImagePickerResponse } from 'react-native-image-picker'

function useImageFormdata(){

    const [ imageData, setImageData ] = useState<ImagePickerResponse>()
    const [ formData, setFormData ] = useState<FormData>()
    const [ fileData, setFileData ] = useState({
        name: "",
        type: "",
        uri: ""
    })

    useEffect(() => {
        if(imageData){
            let formData = new FormData()
            formData.append("name", imageData.fileName)
            formData.append("type", imageData.type)
            formData.append("uri", imageData.uri)
            setFormData(formData)
            setFileData({
                name: imageData.fileName!,
                type: imageData.type!,
                uri: imageData.uri!
            })
        }
        
    }, [imageData])

    return { fileData, formData, setImageData }
}

export default useImageFormdata