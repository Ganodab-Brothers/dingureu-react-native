import React from 'react'
import { 
    View,
    StyleSheet,
    Text,
    TextInput
} from 'react-native'
import Header from '../../components/Header'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import useInputs from '../../hook/useInputs'
import { baseColor } from '../../constants/style'
import { useNavigation } from '@react-navigation/native'

const WriteStory = () => {

    const navigation = useNavigation()

    const [ { title }, onChange ] = useInputs({
        title: ""
    })

    return(
        <View style={styles.container}>
            <Header 
                title="이야기 쓰기" 
                rightText="완료" 
                rightTextColor="#227903"
                leftIcon
                onPressLeft={() => navigation.goBack()}
            />
            <View style={styles.write}>
                <Text style={styles.writeLabel}>제목</Text>
                <TextInput
                    style={styles.titleInput}
                    placeholder="여기를 눌러 제목을 입력해주세요."
                    value={title}
                    onChangeText={(text) => onChange("title", text)}
                    placeholderTextColor="#929292"
                />
            </View>
            <View style={styles.write}>
                <Text style={styles.writeLabel}>이야기</Text>
            </View>
        </View>
    )
}

export default WriteStory

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center"
    },
    write: {
        marginHorizontal: 30,
        marginTop: 30,
        width: wp("100%") - 60,
        display: "flex",
        alignItems: "flex-start"
    },
    writeLabel: {
        fontSize: 16,
        marginBottom: 10,
        color: baseColor
    },
    titleInput: {
        width: "100%",
        fontSize: 18
    }
})