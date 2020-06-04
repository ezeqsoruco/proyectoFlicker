import AsyncStorage from '@react-native-community/async-storage';

const ERROR_STORING_DATA_MESSAGE = 'An error ocurred trying to store data from the device.'
const ERROR_GETTING_DATA_MESSAGE = 'An error ocurred trying to get data into the device.'

export const storeLocalData = async (value, storageKey) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(storageKey, jsonValue)
    } catch (e) {
        console.log(ERROR_STORING_DATA_MESSAGE)
    }
}

export const getLocalData = async (storageKey) => {
    try {
        const jsonValue = await AsyncStorage.getItem(storageKey)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(ERROR_GETTING_DATA_MESSAGE)
    }
}
