import { StyleSheet } from "react-native"

export const baseColor = "#75A2E5"

export const fontFamily = "Cafe24Ohsquare"

export const globalStyle = StyleSheet.create({
    logo: {
        fontFamily: fontFamily,
        fontWeight: "bold",
        fontSize: 45,
        color: baseColor,
        height: 260,
        textAlignVertical: "top"
    }
    
})