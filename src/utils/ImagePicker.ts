import { ImagePickerResponse, launchCamera, CameraOptions } from "react-native-image-picker"

const ImagePicker = ({
    options,
    onSuccess,
    onFailure
}: {
    options: CameraOptions,
    onSuccess: (res: ImagePickerResponse) => void,
    onFailure: (res: ImagePickerResponse) => void
}) => {
    launchCamera(options, (res) => {
        if(res.errorMessage){
            onFailure(res)
        } else {
            onSuccess(res)
        }
    })
}

export default ImagePicker