import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Alert
} from 'react-native'
import AccountInput from '../../components/AccountInput'
import useInputs from '../../hook/useInputs'
import withLoading from '../../hoc/withLoading'
import AccountButton from '../../components/AccountButton'
import { globalStyle } from '../../constants/style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import { userToken } from '../../api/users'
import { setItemToAsync } from '../../utils/AsyncStorage'

const Login = () => {

    const navigation = useNavigation()

    const [ { username, password }, onChange ] = useInputs({
        username: "",
        password: ""
    })

    const onPressLogin = () => {
        userToken({
            data: {
                username: username, 
                password: password
            }
        })
        .then(res => {
            if(res.data["token"]){
                setItemToAsync("token", res.data["token"])
                .then(token => {
                    navigation.reset({
                        index: 0,
                        routes: [{name: "Timeline"}]
                    })
                })
            } else {
                Alert.alert("다시 시도해 주세요")
            }
        })
        .catch(err => {
            Alert.alert("다시 시도해 주세요")
        })
    }

    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.inputWrapper}>
                <Text style={{...globalStyle.logo, ...styles.logo}}>딩굴</Text>
                <AccountInput
                    value={username}
                    onChange={onChange}
                    placeholder="아이디"
                    name="username"
                />
                <AccountInput
                    value={password}
                    onChange={onChange}
                    type="password"
                    placeholder="비밀번호"
                    name="password"
                />
            </View>
            <View style={styles.buttonWrapper}>
                <AccountButton
                    text="로그인"
                    onPress={onPressLogin}
                    isActive
                />
            </View>
        </KeyboardAwareScrollView>
    )
}

export default withLoading(Login)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonWrapper: {
        display: "flex",
        alignItems: "center",
        height: "20%"
    },
    inputWrapper: {
        display: "flex",
        alignItems: "center",
        height: "80%",
        justifyContent: "center"
    },
    logo: {
        height: 160,
    },

})