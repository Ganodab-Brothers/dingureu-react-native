import { useState, useEffect } from 'react'
import { ImagePickerResponse } from 'react-native-image-picker'

function useImageFormdata(){

    const [ imageData, setImageData ] = useState<ImagePickerResponse>()
    const [ formData, setFormData ] = useState({
        name: "",
        type: "",
        uri: ""
    })

    useEffect(() => {
        if(imageData){
            setFormData({
                name: imageData.fileName!,
                type: imageData.type!,
                uri: imageData.uri!
            })
        }
        
    }, [imageData])

    return { formData, setImageData }
}

export default useImageFormdata