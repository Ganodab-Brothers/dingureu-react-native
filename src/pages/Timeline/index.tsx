import React, { useState, useRef, useEffect } from 'react'
import { 
    View,
    StyleSheet,
    FlatList,
    StatusBar,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
    Image,
    ImageSourcePropType
} from 'react-native'
import { baseColor } from '../../constants/style'
import TimelineHeader from '../../components/TimelineHeader'
import TimelineItem from '../../components/TimelineItem'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Swiper from 'react-native-swiper'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import { articleLocal, articleSchool } from '../../api/articles'
import { userMe } from '../../api/users'
import { useSetRecoilState, useRecoilState } from 'recoil'
import { userInfoAtom, timelineIndexAtom } from '../../store'
import camelcaseKeys from 'camelcase-keys'
import { removeItemFromAsync } from '../../utils/AsyncStorage'
import { ArticleLocal, ArticleSchool } from '../../types/articles'
import RBSheet from 'react-native-raw-bottom-sheet'

interface SheetSelect {
    onPress?: () => void
    label: string,
    labelImage?: ImageSourcePropType
}

const Timeline = () => {

    const navigation = useNavigation()

    const [ timelineIndex, setTimelineIndex ] = useRecoilState(timelineIndexAtom)

    const setUserInfo = useSetRecoilState(userInfoAtom)

    const [ localTimeline, setLocalTimeline ] = useState<ArticleLocal[]>([])
    const [ schoolTimeline, setSchoolTimeline ] = useState<ArticleSchool[]>([])

    const swiperRef = useRef<Swiper>(null)
    const rbSheetRef = useRef<RBSheet>(null)

    const onPressSheetOn = () => {
        rbSheetRef.current!.open()
    }

    const onPressWrite = () => {
        rbSheetRef.current!.close()
        navigation.navigate("Write")
    }

    const onPressLogout = async () => {
        try {
            rbSheetRef.current!.close()
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

    const sheetSelects: SheetSelect[] = [
        {
            onPress: onPressWrite,
            label: "이야기 쓰기",
            labelImage: require("../../assets/edit.png")
        },
        {
            label: "내 정보"
        },
        {
            onPress: onPressLogout,
            label: "로그아웃"
        }
    ]

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
                    {localTimeline.length ? (
                        <FlatList
                            data={localTimeline}
                            renderItem={TimelineItem}
                            disableVirtualization={false}
                        />
                    ) : (
                        <View style={styles.noDataWrapper}>
                            <Text style={styles.noData}>등록된 글이 없습니다.</Text>
                            <Text style={styles.noData}>첫 번째 글을 써보세요!</Text>
                        </View>
                    )}
                    
                </View>
                <View style={styles.contentWrapper}>
                    {schoolTimeline.length ? (
                        <FlatList
                            data={schoolTimeline}
                            renderItem={TimelineItem}
                            disableVirtualization={false}
                        />
                    ) : (
                        <View style={styles.noDataWrapper}>
                            <Text style={styles.noData}>등록된 글이 없습니다.</Text>
                            <Text style={styles.noData}>첫 번째 글을 써보세요!</Text>
                        </View>
                        
                    )}
                    
                </View>
            </Swiper>
            <View style={styles.leftAligned}>
                <TouchableOpacity 
                    style={styles.menuIconWrapper}
                    onPress={onPressSheetOn}
                >
                    <Image 
                        source={require("../../assets/menu-timeline.png")}
                        style={styles.menuIcon}
                    />
                </TouchableOpacity>
                
            </View>
            <RBSheet
                ref={rbSheetRef}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={50 + 150}
                customStyles={{
                    wrapper: {
                        alignItems: "center"
                    },
                    container: {
                        width: wp("95%"),
                        borderRadius: 20,
                        marginBottom: 20,
                        paddingVertical: 10
                    }
                }}
            >
                {sheetSelects.map((el: SheetSelect, i: number) => (
                    <TouchableOpacity 
                        onPress={el.onPress}
                        style={styles.sheetContentRow}
                        key={i}
                    >
                        <View style={styles.labelImageWrapper}>
                            <Image
                                source={el.labelImage ? el.labelImage : require("../../assets/edit.png")}
                                style={styles.labelImage}
                            />
                        </View>
                        <Text style={styles.sheetContentText}>{el.label}</Text>
                    </TouchableOpacity>
                ))}
            </RBSheet>
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
        height: hp("100%") - 100
    },
    leftAligned: {
        position: "absolute",
        bottom: 35,
        width: "100%",
        display: "flex",
        alignItems: "flex-end"
    },
    menuIconWrapper: {
        padding: 10,
        backgroundColor: baseColor,
        marginRight: 25,
        borderRadius: 25,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: .25,
    },
    menuIcon: {
        width: 30, 
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: baseColor,
        borderRadius: 15,
        resizeMode: "contain"
    },
    noDataWrapper: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginTop: 30
    },
    noData: {
        color: "#C4C4C4",
        fontWeight: "500",
        fontSize: 24
    },
    sheetContentRow: {
        height: 50,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 20
    },
    labelImageWrapper: {
        width: 80,
    },
    labelImage: {
        height: 25,
        resizeMode: "contain",
        width: "auto"
    },
    sheetContentText: {
        color: "#555555",
        fontSize: 18,
        fontWeight: "500"
    }
})