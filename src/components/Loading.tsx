import React from 'react'
import { 
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Loading = () => {
    return (
        <View style={styles.loadingWrapper}>
            <ActivityIndicator size="large" color="#ffffff"/>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    loadingWrapper: {
        position: "absolute",
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#000000',
        zIndex: 9999999,
        opacity: .5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})