import React, { useRef } from 'react'
import { 
    View,
    StyleSheet,
    Text,
    TextInput,
    Alert
} from 'react-native'
import Header from '../../components/Header'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import useInputs from '../../hook/useInputs'
import { baseColor } from '../../constants/style'
import { useNavigation } from '@react-navigation/native'
import RBSheet from 'react-native-raw-bottom-sheet'
import { createArticleLocal, createArticleschool } from '../../api/articles'

const WriteStory = () => {

    const navigation = useNavigation()

    const [ { title, content }, onChange ] = useInputs({
        title: "",
        content: ""
    })

    const rbSheetRef = useRef<RBSheet>(null)

    const onPressSheetOn = () => {
        rbSheetRef.current!.open()
    }

    const onPressWriteStory = (isLocal: boolean) => {
        isLocal ? (
            createArticleLocal({
                data: {
                    title: title,
                    content: content
                }
            })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
                Alert.alert("글 등록에 실패했습니다. 다시 시도해 주세요")
            })
        ) : (
            createArticleschool({
                data: {
                    title: title,
                    content: content
                }
            })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
                Alert.alert("글 등록에 실패했습니다. 다시 시도해 주세요")
            })
        )
    }

    return(
        <View style={styles.container}>
            <Header 
                title="이야기 쓰기" 
                rightText="완료" 
                onPressRight={onPressSheetOn}
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
            <RBSheet
                ref={rbSheetRef}
                closeOnDragDown={true}
                closeOnPressMask={true}
            >
                <Text style={{fontSize: 123}}>etxt</Text>
            </RBSheet>
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