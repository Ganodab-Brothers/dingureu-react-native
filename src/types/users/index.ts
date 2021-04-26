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
    phone_number?: string
    location: string
    school_id_card_url: string
}

interface User {
    username: string
    nickname: string
    phone_number?: string
    gender?: UserGender
    birthday?: string
    student_id?: string
    school_code: string
    school_name: string
    school?: string
}

export type {
    UserToken,
    UserRegister,
    User
};

export {
    UserGender
}