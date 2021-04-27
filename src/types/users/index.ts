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
    schoolCode: string
    schoolName: string
    birthday: string
    studentId?: string
    phoneNumber?: string
    location: string
    schoolIdCardUrl: string
}

interface User {
    username: string
    nickname: string
    phoneNumber?: string
    gender?: UserGender
    birthday?: string
    studentId?: string
    schoolCode: string
    schoolName: string
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