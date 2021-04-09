import React from 'react'
import { 
    View,
    StyleSheet,
    Text
} from 'react-native'
import withLoading from '../../../hoc/withLoading'
import AccountButton from '../../../components/AccountButton'
import { globalStyle } from '../../../constants/style'
import AccountInput from '../../../components/AccountInput'
import useInputs from '../../../hook/useInputs'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Main = () => {

    const [ { studentId, birthDate, schoolName, nickname, username, password }, onChange ] = useInputs({
        studentId: "",
        birthDate: "",
        schoolName: "",
        nickname: "",
        username: "",
        password: ""
    })

    const onPressRegister = () => {

    }

    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <Text style={{...globalStyle.logo, ...styles.logo}}>딩굴</Text>
            <AccountInput
                placeholder="학번"
                value={studentId}
                onChange={onChange}
                name="studentId"
            />
            <AccountInput
                placeholder="생년월일"
                value={birthDate}
                onChange={onChange}
                name="birthDate"
            />
            <AccountInput
                placeholder="닉네임"
                value={nickname}
                onChange={onChange}
                name="nickname"
            />
            <AccountInput
                placeholder="아이디"
                value={username}
                onChange={onChange}
                name="username"
            />
            <AccountInput
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={onChange}
                name="password"
            />
            <View></View>
            <View style={styles.buttonWrapper}>
                <AccountButton
                    isActive
                    text="회원가입"
                    onPress={onPressRegister}
                />
            </View>
        </KeyboardAwareScrollView>
    )
}

export default withLoading(Main) 

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        height: 140,
        marginTop: 50
    },
    inputWrapper: {
        height: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonWrapper: {
        marginTop: 50
    }
})