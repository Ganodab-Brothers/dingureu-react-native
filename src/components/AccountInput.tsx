import React from 'react'
import { 
    TextInput,
    StyleSheet 
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

interface Props {
    value: string
    onChange: (name: string, value: string) => void
    placeholder?: string
    type?: string
    name: string
}

const AccountInput: React.FC<Props> = ({
    value,
    onChange,
    placeholder,
    type,
    name
}) => {
    return(
        <TextInput
            value={value}
            onChangeText={(text) => onChange(name, text)}
            placeholder={placeholder}
            style={styles.textinput}
            secureTextEntry={type==="password" ? true : false}
            placeholderTextColor="#979797"
        />
    )
}

export default AccountInput

const styles = StyleSheet.create({
    textinput: {
        width: (wp("100%") - 100),
        fontSize: 16,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 30,
        borderColor: "#b2b2b2",
        borderWidth: .5,
        marginBottom: 20,
        color: "#333333"
    }
})