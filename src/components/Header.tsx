import React from 'react'
import { 
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

interface Props {
    leftIcon?: boolean
    leftText?: string
    leftTextColor?: string
    onPressLeft?: () => void
    title?: string
    titleColor?: string
    rightIcon?: boolean
    rightText?: string
    rightTextColor?: string
    onPressRight?: () => void
}

const Header: React.FC<Props> = ({
    leftIcon,
    leftText,
    leftTextColor,
    onPressLeft,
    title,
    titleColor,
    rightIcon,
    rightText,
    rightTextColor,
    onPressRight
}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.headerMenuWrapper}
                onPress={onPressLeft}
            >
                {leftText && (
                    <Text style={leftTextColor ? {...styles.menuText, color: leftTextColor} : styles.menuText}>{leftText}</Text>
                )}
                {(!leftText && leftIcon) && (
                    <Image
                        style={styles.menuIcon}
                        source={require("../assets/icon_back.png")}
                    />
                )}
            </TouchableOpacity>
            <View style={styles.titleWrapper}>
                <Text style={titleColor ? {...styles.title, color: titleColor} : styles.title}>{title}</Text>
            </View>
            <TouchableOpacity
                style={styles.headerMenuWrapper}
                onPress={onPressRight}
            >
                {rightText && (
                    <Text style={rightTextColor ? {...styles.menuText, color: rightTextColor} : styles.menuText}>{rightText}</Text>
                )}
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 60,
        marginTop: 40,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerMenuWrapper: {
        minWidth: 70,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    menuIcon: {
        
    },
    menuText: {
        fontSize: 20,
        color: "#000000"
    },
    titleWrapper: {

    },
    title: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold"
    }
})