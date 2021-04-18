import React from 'react'
import { 
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

interface Props {
    onPress: () => void
    schoolName: string
    area: string
}

const SchoolItem: React.FC<Props> = ({
    onPress,
    schoolName,
    area
}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.schoolName}>{schoolName}</Text>
            <Text style={styles.area}>{area}</Text>
        </TouchableOpacity>
    )
}

export default SchoolItem

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingVertical: 18,
        borderBottomColor: "#DADADA",
        borderBottomWidth: 1,
    },
    schoolName: {
        color: "#000000",
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10
    },
    area: {
        color: "#666666",
        fontSize: 16,
        marginHorizontal: 15
    }
})