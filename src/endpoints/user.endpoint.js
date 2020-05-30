import { getData } from "./config";

const GET_USER_BY_USERNAME = 'flickr.people.findByUsername'
const USERNAME_PARAMETER = '&username='

export const getUserByUserName = async (username) => {
    const parameter = USERNAME_PARAMETER + username;
    
    return getData(GET_USER_BY_USERNAME, parameter)
        .then(data => data.user)
        .catch(error => console.log(error));
}

export default { getUserByUserName }