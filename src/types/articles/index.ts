interface ArticleLocal {
    id?: number
    writer?: string
    location?: string   
    school?: string
    title: string
    content: string
    createdAt: string
}

interface CreateArticleLocal {
    title: string
    content: string
}

interface UpdateArticleLocal {
    title?: string
    content?: string
}

interface ArticleSchool {
    id?: number
    writer?: string
    school?: string
    title: string
    content: string
    createdAt: string
}

interface CreateArticleSchool {
    title: string
    content: string
}

interface UpdateArticleSchool {
    title?: string
    content?: string
}

type LocalArticleDetailParamList = {
    Detail: {
        localArticleId: number
    }
}

type SchoolArticleDetailParamList = {
    Detail: {
        schoolArticleId: number
    }
}

export type {
    ArticleLocal,
    CreateArticleLocal,
    UpdateArticleLocal,
    ArticleSchool,
    CreateArticleSchool,
    UpdateArticleSchool,
    LocalArticleDetailParamList,
    SchoolArticleDetailParamList
}