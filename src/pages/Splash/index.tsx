import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import withLoading from '../../hoc/withLoading'
import { baseColor, globalStyle } from '../../constants/style'
import AccountButton from '../../components/AccountButton'
import { useNavigation } from '@react-navigation/native'
import { getItemFromAsync } from '../../utils/AsyncStorage'

const Splash = () => {

    const [ splash, setSplash ] = useState(true)

    const navigation = useNavigation()

    const onPressLogin = () => {
        navigation.navigate("Login")
    }

    const onPressRegister = () => {
        navigation.navigate("RegisterMain")
    }

    useEffect(() => {
        setTimeout(() => {
            getItemFromAsync("token")
            .then(token => {
                if(token){
                    navigation.reset({
                        index: 0,
                        routes: [{name: "Timeline"}]
                    })
                } else {
                    setSplash(false)
                }
            })
            .catch(err => {
                setSplash(false)
            })
        }, 2000)
    }, [])

    return(
        <View style={splash ? styles.container : {...styles.container, backgroundColor: "#ffffff"}}>
            <Text style={splash ? {...globalStyle.logo, color: "#ffffff"} : globalStyle.logo}>딩굴</Text>
            {splash ?
                <View style={styles.teamNameWrapper}>
                    <Text style={styles.createdBy}>created By</Text>
                    <Text style={styles.teamName}>Ganodab Brothers</Text>
                </View>
                :
                <View style={styles.buttonWrapper}>
                    <AccountButton
                        text="로그인"
                        isActive
                        onPress={onPressLogin}
                    />
                    <AccountButton
                        text="회원가입"
                        isActive
                        onPress={onPressRegister}
                    />
                </View>
            }
        </View>
    )
}

export default withLoading(Splash)

const styles = StyleSheet.create({
    container: {
        backgroundColor: baseColor,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    buttons: {
        width: "100%",
        display: "flex",
        alignItems: "center"
    },
    buttonWrapper: {
        display: "flex",
        alignItems: "center",
        position: "absolute",
        bottom: 100
    },
    teamNameWrapper: {
        display: "flex",
        alignItems: "center",
        position: "absolute",
        bottom: 80
    },
    createdBy: {
        color: "#ffffff",
        fontSize: 18,
        marginBottom: 5
    },
    teamName: {
        color: "#ffffff",
        fontSize: 22,
        fontWeight: "normal"
    }
})