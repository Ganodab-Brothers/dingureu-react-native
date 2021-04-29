import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native'
import { LocalArticleDetailParamList, ArticleLocal } from '../../../types/articles'
import { articleLocalDetail } from '../../../api/articles'
import { CommentLocal } from '../../../types/comments'
import Header from '../../../components/Header'

const Local = () => {

    const route = useRoute<RouteProp<LocalArticleDetailParamList, "Detail">>()

    const navigation = useNavigation()

    const [ article, setArticle ] = useState<ArticleLocal>()
    const [ comments, setComments ] = useState<CommentLocal[]>([])

    useEffect(() => {
        articleLocalDetail({
            id: route.params.localArticleId
        })
        .then(res => {
            setArticle(res.data.article)
            setComments(res.data.comments)
        })
        .catch(err => {
            console.log(err)
        })
    }, [route.params])

    return (
        <ScrollView>
            <Header
                leftIcon
                onPressLeft={() => navigation.goBack()}
                title=""
            />
        </ScrollView>
    )
}

export default Local