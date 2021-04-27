import AsyncStorage from "@react-native-community/async-storage"

const setItemToAsync = (name: string, value: string) => {
    return AsyncStorage.setItem(name, value)
}

const getItemFromAsync = (name: string) => {
    return AsyncStorage.getItem(name)
}

const removeItemFromAsync = (name: string) => {
    return AsyncStorage.removeItem(name)
}

export {
    setItemToAsync,
    getItemFromAsync,
    removeItemFromAsync
}