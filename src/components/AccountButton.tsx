import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { baseColor } from '../constants/style'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

interface Props {
    text: string,
    onPress: () => void
    isActive: boolean
}

const AccountButton: React.FC<Props> = ({
    text,
    onPress,
    isActive
}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={isActive ? {...styles.container, ...styles.containerActive} : styles.container}>
                <Text style={isActive ? {...styles.text, ...styles.textActive} : styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AccountButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderRadius: 30,
        borderColor: "#b2b2b2",
        borderWidth: .5,
        width: (wp("100%") - 100),
        marginBottom: 20,
        display: "flex",
        alignItems: "center"
    },
    containerActive: {
        borderColor: baseColor,
        backgroundColor: baseColor,
    },
    text: {
        color: "#000000",
        fontSize: 18,
        paddingVertical: 16
    },
    textActive: {
        color: "#ffffff",
        fontWeight: "bold"
    }
})