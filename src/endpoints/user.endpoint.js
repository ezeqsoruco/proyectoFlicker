import { getData } from "./config";
import { getLocalData, storeLocalData } from '../storage/local-storage';
import { USERNAME_KEY } from "../storage/local-storage-keys";

const GET_USER_BY_USERNAME = 'flickr.people.findByUsername'
const USERNAME_PARAMETER = '&username='
const DEFAULT_USERNAME = 'maxipomar';

export const getUser = async () => {
    const parameter = USERNAME_PARAMETER + username;
    let username = getLocalData(USERNAME_KEY);
    if (!username) {
        username = DEFAULT_USERNAME;
        setUsername(username)
    }
    return getUserByUserName(DEFAULT_USERNAME);
}

export const setUsername = (username) => {
    storeLocalData(USERNAME_KEY, username)
}

export const getUserByUserName = async (username) => {
    const parameter = USERNAME_PARAMETER + username;

    return getData(GET_USER_BY_USERNAME, parameter)
        .then(data => data.user)
        .catch(error => console.log(error));
}

export default { getUserByUserName, getUser, setUsername }