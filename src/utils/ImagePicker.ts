import { ImagePickerResponse, launchCamera, CameraOptions, launchImageLibrary } from "react-native-image-picker"

const ImagePicker = ({
    options,
    onSuccess,
    onFailure
}: {
    options: CameraOptions,
    onSuccess: (res: ImagePickerResponse) => void,
    onFailure: (res: ImagePickerResponse) => void
}) => {
    launchImageLibrary(options, (res) => {
        if(res.errorMessage){
            onFailure(res)
        } else {
            onSuccess(res)
        }
    })
}

export default ImagePicker