import React, { useState, useRef, useEffect } from 'react'
import { 
    View,
    StyleSheet,
    FlatList,
    StatusBar,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Alert
} from 'react-native'
import { baseColor } from '../../constants/style'
import TimelineHeader from '../../components/TimelineHeader'
import TimelineItem from '../../components/TimelineItem'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Swiper from 'react-native-swiper'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import { articleLocal, articleSchool } from '../../api/articles'
import { userMe } from '../../api/users'
import { useSetRecoilState, useRecoilState } from 'recoil'
import { userInfoAtom, timelineIndexAtom } from '../../store'
import camelcaseKeys from 'camelcase-keys'
import { removeItemFromAsync } from '../../utils/AsyncStorage'

const dummy = [
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },
    {
        title: "우리반 담임 ㄹㅇ ㅋㅋ",
        schoolName: "양강중학교",
        content: "우리 반 담임 어제 퇴근하는길에 빈대떡 사먹고 있더라 인사하니까 하나 사줌 ㅋㅋ",
        author: "iijijij",
        commentCount: 9,
        uploaded: 3 
    },

]

const Timeline = () => {

    const navigation = useNavigation()

    const [ timelineIndex, setTimelineIndex ] = useRecoilState(timelineIndexAtom)

    const setUserInfo = useSetRecoilState(userInfoAtom)

    const swiperRef = useRef<Swiper>(null)

    const onPressWrite = () => {
        navigation.navigate("Write")
    }

    const onPressLogout = async () => {
        try {
            await removeItemFromAsync("access")
            await removeItemFromAsync("refresh")
            navigation.reset({
                index: 0,
                routes: [{name: "Splash"}]
            })
        } catch(e) {
            console.log(e)
            Alert.alert("로그아웃에 실패하였습니다. 다시 시도해 주세요")
        }
    }

    const onPressToggle = (index: number) => {
        setTimelineIndex(index)
    }

    const onIndexChanged = (index: number) => {
        setTimelineIndex(index)
    }

    useFocusEffect(() => {
        
    })

    useEffect(() => {
        swiperRef.current?.scrollTo(timelineIndex)
        setTimelineIndex(timelineIndex)
    }, [timelineIndex])

    useEffect(() => {

        userMe()
        .then(res => {
            setUserInfo(camelcaseKeys(res.data))
        })
        .catch(err => {
            console.log(err)
        })

        articleLocal()
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    return (
        <View style={styles.container}>
            <StatusBar translucent hidden/>
            <TimelineHeader timelineIndex={timelineIndex} setTimelineIndex={setTimelineIndex}/>
            <Swiper
                showsButtons={false}
                onIndexChanged={onIndexChanged}
                ref={swiperRef}
                loop={false}
                dot={false}
                showsPagination={false}
            >
                <View style={styles.contentWrapper}>
                    <FlatList
                        data={dummy}
                        renderItem={TimelineItem}
                        disableVirtualization={false}
                    />
                </View>
                <View style={styles.contentWrapper}>
                    <FlatList
                        data={dummy}
                        renderItem={TimelineItem}
                        disableVirtualization={false}
                    />
                </View>
            </Swiper>
            <View style={styles.rightAligned}>
                <TouchableOpacity
                    onPress={onPressLogout}
                    style={styles.writeButtonWrapper}
                >
                    <Text style={styles.writeButtonText}>로그아웃</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPressWrite}
                    style={styles.writeButtonWrapper}
                >
                    <Text style={styles.writeButtonText}>이야기 쓰기</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Timeline

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f2f2f2"
    },
    contentWrapper: {
        width: "100%",
        height: heightPercentageToDP("100%") - 100
    },
    rightAligned: {
        position: "absolute",
        bottom: 40,
        width: "100%",
        display: "flex",
        alignItems: "flex-end"
    },
    writeButtonWrapper: {
        width: "30%",
        backgroundColor: baseColor,
        borderRadius: 33,
        paddingVertical: 18,
        display: "flex",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: .25,
        marginRight: 25
    },
    writeButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold"
    }
})