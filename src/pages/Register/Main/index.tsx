import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { globalStyle } from '../../../constants/style'
import AccountButton from '../../../components/AccountButton'
import AccountInput from '../../../components/AccountInput'
import useInputs from '../../../hook/useInputs'
import { UserGender } from '../../../types/users'
import { useNavigation } from '@react-navigation/native'
import { useRecoilState } from 'recoil'
import { registerDataAtom } from '../../../store'

const Register = () => {

    const navigation = useNavigation()

    const [ registerData, setRegisterData ] = useRecoilState(registerDataAtom)

    const [ { birthday, gender, name, username, nickname, password }, onChange ] = useInputs({
        birthday: "",
        gender: UserGender.MALE,
        name: "",
        username: "",
        nickname: "",
        password: ""
    })

    const onPressNext = () => {
        setRegisterData({
            ...registerData,
            birthday: birthday,
            gender: gender,
            name: name,
            username: username,
            nickname: nickname,
            password: password
        })
        navigation.navigate("RegisterSearchSchool")
    }

    return(
        <View style={styles.container}>
            <Text style={{...globalStyle.logo, ...styles.logo}}>딩굴</Text>
            <AccountInput
                value={birthday}
                onChange={onChange}
                name="birthday"
                placeholder="생년월일"
            />
            <AccountInput
                value={name}
                onChange={onChange}
                name="name"
                placeholder="이름"
            />
            <AccountInput
                value={username}
                onChange={onChange}
                name="username"
                placeholder="아이디"
            />
            <AccountInput
                value={nickname}
                onChange={onChange}
                name="nickname"
                placeholder="닉네임"
            />
            <AccountInput
                value={password}
                onChange={onChange}
                name="password"
                placeholder="비밀번호"
                type="password"
            />
            <View style={styles.genderButtonWrapper}>
                <AccountButton
                    width={"47%"}
                    isActive={gender===UserGender.MALE}
                    text="남자"
                    onPress={() => onChange("gender", UserGender.MALE)}
                    isToggle
                />
                <AccountButton
                    width={"47%"}
                    isActive={gender===UserGender.FEMALE}
                    text="여자"
                    onPress={() => onChange("gender", UserGender.FEMALE)}
                    isToggle
                />
            </View>
            <View style={styles.buttonWrapper}>
                <AccountButton
                    text="다음"
                    isActive={(birthday && gender && name && username && nickname && password) ? true : false}
                    onPress={onPressNext}
                />
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center"
    },      
    logo: {
        height: 100,
        marginTop: 100
    },
    genderButtonWrapper: {
        width: (wp("100%") - 100),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    buttonWrapper: {
        position: "absolute",
        bottom: 30
    }
})