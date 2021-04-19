enum UserGender {
    MALE = "m",
    FEMALE = "f"
}

interface UserToken {
    username: string
    password: string
}

interface UserRegister {
    gender: UserGender
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
    UserToken,
    UserRegister,
};

export {
    UserGender
}