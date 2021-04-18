import axios from 'axios'
import { neisSchoolInfoKey } from '../config'

export const searchSchool = (schoolName: string) => {
    return axios.get(`https://open.neis.go.kr/hub/schoolInfo?KEY=${neisSchoolInfoKey}&Type=json&pSize=20&pIndex=1&SCHUL_NM=${schoolName}`)
}