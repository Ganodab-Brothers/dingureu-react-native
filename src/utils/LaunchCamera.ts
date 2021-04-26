import { ImagePickerResponse, launchCamera, CameraOptions } from "react-native-image-picker"

const LaunchCamera = ({
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

export default launchCamera