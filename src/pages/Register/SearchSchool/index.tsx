import React, { useEffect, useState } from 'react'
import { 
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native'
import AccountInput from '../../../components/AccountInput'
import useInputs from '../../../hook/useInputs'
import { useNavigation } from '@react-navigation/native'
import Header from '../../../components/Header'
import AccountButton from '../../../components/AccountButton'
import { searchSchool } from '../../../utils/OpenApi'
import { SchoolData } from '../../../types/utils'
import SchoolItem from '../../../components/SchoolItem'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { useRecoilState } from 'recoil'
import { RegisterAtom } from '../../../store'

const SearchSchool = () => {

    const navigation = useNavigation()

    const [ registerAtom, setRegisterAtom ] = useRecoilState(RegisterAtom)

    const [ { schoolName, schoolCode, schoolLocation }, onChange ] = useInputs({
        schoolName: "",
        schoolCode: "",
        schoolLocation: ""
    })

    const [ schoolList, setSchoolList ] = useState<SchoolData[]>([])
    const [ empty, setEmpty ] = useState<boolean>(true)

    const onPressNext = () => {
        setRegisterAtom({
            ...registerAtom,
            schoolName: schoolName,
            schoolCode: schoolCode,
            schoolLocation: schoolLocation
        })
        navigation.navigate("RegisterCard")
    }

    const onPressSchoolItem = (id: string, schoolName: string, schoolLocation: string) => {
        onChange("schoolCode", id)
        onChange("schoolName", schoolName)
        onChange("schoolAddress", schoolLocation)
    }

    useEffect(() => {
        if(schoolName){
            searchSchool(schoolName)
            .then(res => {
                setEmpty(false)
                setSchoolList(res.data.schoolInfo[1].row)
            })
            .catch(err => {
                setEmpty(true)
                setSchoolList([])
            })
        }
    }, [schoolName])

    return(
        <View style={styles.container}>
            <Header
                title="학교 찾기"
                leftIcon
                onPressLeft={() => navigation.goBack()}
            />
            <AccountInput
                value={schoolName}
                onChange={onChange}
                name="schoolName"
                placeholder="학교명 입력"
            />
            <ScrollView contentContainerStyle={styles.schoolListWrapper}>
                {empty && <Text style={styles.emptyText}>검색 결과가 없습니다.</Text>}
                {schoolList.map((el: SchoolData, i: number) => (
                    <SchoolItem
                        key={i}
                        onPress={() => onPressSchoolItem(el.SD_SCHUL_CODE, el.SCHUL_NM, el.ORG_RDNMA)}
                        schoolName={el.SCHUL_NM}
                        area={el.ORG_RDNMA}
                    />
                ))}
            </ScrollView>
            <View style={styles.buttonWrapper}>
                <AccountButton
                    text="다음" 
                    isActive={(schoolCode && schoolLocation) ? true : false}
                    onPress={onPressNext}
                />
            </View>
        </View>
    )
}

export default SearchSchool

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center"
    },
    buttonWrapper: {
        position: "absolute",
        bottom: 30,
    },
    schoolListWrapper: {
        width: widthPercentageToDP("100%"),
        display: "flex",
        overflow: "hidden",
        paddingBottom: 150
    },
    emptyText: {
        width: "100%",
        textAlign: "center",
        fontSize: 18,
        color: "#BABABA"
    }
})