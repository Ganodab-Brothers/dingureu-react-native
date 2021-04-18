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

const Card = () => {

    const navigation = useNavigation()

    const { formData, setImageData } = useImageFormdata()

    const onPressShoot = () => {

        const onSuccess = (res: ImagePickerResponse) => {
            console.log(res)
            setImageData(res)
        }

        const onFailure = (res: ImagePickerResponse) => {
            console.log(res)
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
                    source={formData.uri ? { uri: formData.uri } : { uri: formData.uri }}
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
                    isActive={formData.uri ? true : false}
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