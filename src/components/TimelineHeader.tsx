import React, { Dispatch } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { baseColor } from '../constants/style'

interface Props {
    timelineIndex: number,
    setTimelineIndex: Dispatch<number>
}

const TimelineHeader: React.FC<Props> = ({
    timelineIndex,
    setTimelineIndex
}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => setTimelineIndex(0)}
                style={timelineIndex===0 ? {...styles.headerTextWrapper, ...styles.headerTextWrapperActive} : styles.headerTextWrapper}
            >
                <Text style={timelineIndex===0 ? {...styles.headerText, ...styles.headerTextActive} : styles.headerText}>
                    용산구 딩굴
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setTimelineIndex(1)}
                style={timelineIndex===1 ? {...styles.headerTextWrapper, ...styles.headerTextWrapperActive} : styles.headerTextWrapper}
            >
                <Text style={timelineIndex===1 ? {...styles.headerText, ...styles.headerTextActive} : styles.headerText}>
                    선린인터넷고등학교
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default TimelineHeader

const styles = StyleSheet.create({
    header: {
        width: "100%",
        paddingTop: 40,
        height: 100,
        backgroundColor: baseColor,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    headerTextWrapperActive: {
        borderBottomColor: "#ffffff",
    },
    headerTextWrapper: {
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: baseColor,
        borderBottomWidth: 3
    },
    headerTextActive: {
        fontWeight: "bold",
    },
    headerText: {
        fontSize: 20,
        color: "#ffffff",
    }
})