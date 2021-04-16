import React, { useEffect, useRef } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Animated,
    ScrollView,
    Button,
    TouchableOpacity,
    LogBox
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { globalStyle, baseColor } from '../../constants/style'
import AccountButton from '../../components/AccountButton'

LogBox.ignoreAllLogs()
 
const Register = () => {

    const scrollX = useRef(new Animated.Value(0)).current

    const animationEvent = () => {
        return Animated.event(
            [{
                nativeEvent: {
                    contentOffset: {
                        x: scrollX
                    }
                }
            }], {
                useNativeDriver: true
            }
        )
    }

    return(
        <View style={styles.container}>
            <Text style={{...globalStyle.logo, ...styles.logo}}>딩굴</Text>
            <ScrollView 
                contentContainerStyle={styles.animationWrapper}
                horizontal
                pagingEnabled
                onScroll={animationEvent}
            >
                <View style={[styles.scrollInsideView, {backgroundColor: "red"}]}></View>
                <View style={[styles.scrollInsideView, {backgroundColor: "blue"}]}></View>
            </ScrollView>
            <AccountButton
                text="다음"
                isActive={false}
                onPress={() => {}}
            />
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
    animationWrapper: {
        height: 400,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "black"
    },
    scrollInsideView: {
        width: wp("100%"),
        height: 300,
    },
})