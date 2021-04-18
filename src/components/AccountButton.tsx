import React from 'react'
import { 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { baseColor } from '../constants/style'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

interface Props {
    text: string,
    onPress?: () => void
    isActive: boolean
    width?: string
    isToggle?: boolean
}

const AccountButton: React.FC<Props> = ({
    text,
    onPress,
    isActive,
    width,
    isToggle
}) => {
    return(
        <TouchableOpacity 
            style={isActive ? [styles.container, styles.containerActive, width ? { width: width } : {}] : [styles.container, width ? { width: width } : {}]} 
            disabled={isToggle ? false : !isActive} 
            onPress={onPress}
        >
            <Text style={isActive ? {...styles.text, ...styles.textActive} : styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default AccountButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#C4C4C4",
        borderRadius: 30,
        borderColor: "#C4C4C4",
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
        color: "#ffffff",
        fontSize: 18,
        paddingVertical: 16
    },
    textActive: {
        fontWeight: "bold"
    }
})