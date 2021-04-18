import { atom } from 'recoil'
import { UserGender } from '../types/users'

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
    }
})