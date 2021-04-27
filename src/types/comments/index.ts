interface CommentLocal {
    id: number
    writer: string
    content: string
    article: number
}

interface CreateCommentLocal {
    content: string
    article: number
}

interface UpdateCommentLocal {
    content: string
    article: number
}

interface CommentSchool {
    id: number
    writer: string
    content: string
    article: number
}

interface CreateCommentSchool {
    content: string
    article: number
}

interface UpdateCommentSchool {
    content: string
    article: number
}

export type {
    CommentLocal,
    CreateCommentLocal,
    UpdateCommentLocal,
    CommentSchool,
    CreateCommentSchool,
    UpdateCommentSchool
}