interface UserAuth {
    username: string
    password: string
}

interface UserRegister {
    gender: "m" | "f"
    name: string
    nickname: string
    password: string
    username: string
    school_code: string
    school_name: string
    birthday: string
    student_id?: string
}

export type {
    UserAuth,
    UserRegister
};