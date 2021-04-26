import { atom } from 'recoil'
import { UserGender, User } from '../types/users'

export const RegisterAtom = atom({
    key: "RegisterAtom",
    default: {
        birthday: "" as string,
        gender: UserGender.MALE as UserGender,
        name: "" as string,
        nickname: "" as string,
        username: "" as string,
        password: "" as string,
        schoolName: "" as string,
        schoolCode: "" as string,
        schoolLocation: "" as string
    }
})

export const userInfoAtom = atom({
    key: "userInfo",
    default: {
        username: "",
        nickname: "",
        school_code: "",
        school_name: "",
        school: "",
        student_id: "",
        phone_number: "",
        gender: UserGender.MALE,
        birthday: ""
    } as User
})