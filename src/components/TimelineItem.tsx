import React from 'react'
import { 
    View, 
    StyleSheet,
    Text
} from 'react-native'
import { baseColor } from '../constants/style'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { ArticleLocal, ArticleSchool } from '../types/articles'
import { TimeForToday } from '../utils/TimeForToday'

interface Props {
    item: ArticleLocal | ArticleSchool
}

const TimelineItem: React.FC<Props> = ({item}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.schoolName}>{item.school}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <View style={styles.infoWrapper}>
                <Text style={styles.author}>{item.writer}</Text>
                <Text style={styles.uploaded}>{TimeForToday(item.createdAt)}분전</Text>
            </View>
            <View style={styles.utilWrapper}>
                <View style={styles.util}>
                    <Text style={styles.comment}>댓글 {/*item.commentCount*/}</Text>
                </View>
            </View>
            <View style={styles.divider}/>
        </View>
    )
}

export default TimelineItem

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginTop: 10
    },
    schoolName: {
        fontSize: 14,
        marginBottom: 20
    },
    title: {
        fontWeight: "bold",
        marginBottom: 25,
        fontSize: 18
    },
    content: {
        color: "#5f5f5f",
        fontSize: 14,
        marginBottom: 35
    },
    infoWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 18
    },
    author: {
        color: baseColor,
        fontSize: 14
    },
    uploaded: {
        color: "#878787",
        fontSize: 14
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#dadada",
    },
    utilWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
        marginBottom: 16
    },
    util: {
        display: "flex",
        flexDirection: "row"
    },
    comment: {
        color: "#878787",
        fontSize: 16
    }
})