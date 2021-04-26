import React from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ImagePicker from '../../../utils/ImagePicker'
import AccountButton from '../../../components/AccountButton'
import { ImagePickerResponse } from 'react-native-image-picker'
import Header from '../../../components/Header'
import useImageFormdata from '../../../hook/useImageFormdata'
import { fileUpload } from '../../../api/files'
import { userRegister } from '../../../api/users'
import { useRecoilValue } from 'recoil'
import { registerDataAtom } from '../../../store'

const Card = () => {

    const navigation = useNavigation()

    const registerData = useRecoilValue(registerDataAtom)

    const { fileData, formData, setImageData } = useImageFormdata()

    const onPressShoot = () => {

        const onSuccess = (res: ImagePickerResponse) => {
            setImageData(res)
        }

        const onFailure = (res: ImagePickerResponse) => {
            console.log(res.errorMessage)
        }

        ImagePicker({
            options: {
                mediaType: "photo"
            },
            onSuccess: onSuccess,
            onFailure: onFailure
        })
    }

    const onPressRegister = () => {
        fileUpload({
            fileName: fileData.name,
            data: formData!,
            onFailure: (err) => {
                console.log(err)
            },
            onSuccess: (res) => {
                console.log(res)
                /*
                userRegister({
                    data: {
                        name: registerData.name,
                        gender: registerData.gender,
                        password: registerData.password,
                        nickname: registerData.nickname,
                        username: registerData.username,
                        school_code: registerData.schoolCode,
                        school_name: registerData.schoolName,
                        birthday: registerData.birthday,
                        location: registerData.schoolLocation,
                        school_id_card_url: res.data
                    }
                })*/
            }
        })
    }

    return (
        <View style={styles.container}>
            <Header
                title="학생증 촬영"
                leftIcon
                onPressLeft={() => navigation.goBack()}
            />
            <View style={styles.cardImageWrapper}>
                <Image
                    style={styles.cardImage}
                    source={fileData.uri ? { uri: fileData.uri } : { uri: fileData.uri }}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <AccountButton
                    text="촬영"
                    onPress={onPressShoot}
                    isActive={true}
                />
                <AccountButton
                    text="회원가입"
                    onPress={onPressRegister}
                    isActive={fileData.uri ? true : false}
                />
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center"
    },
    buttonWrapper: {
        position: "absolute",
        bottom: 30,
    },
    cardImageWrapper: {
        width: "100%",
        height: "50%",
        marginTop: 50
    },
    cardImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    }
})