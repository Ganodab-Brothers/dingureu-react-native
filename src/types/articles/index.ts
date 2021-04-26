interface ArticleLocal {
    id?: number
    writer?: string
    location?: string
    title: string
    content: string
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
    location?: string
    title: string
    content: string
}

interface CreateArticleSchool {
    title: string
    content: string
}

interface UpdateArticleSchool {
    title?: string
    content?: string
}

export type {
    ArticleLocal,
    CreateArticleLocal,
    UpdateArticleLocal,
    ArticleSchool,
    CreateArticleSchool,
    UpdateArticleSchool
}