import { buildEndpoint } from "./config";
import axios from 'axios';

const GET_USER_BY_USERNAME = 'flickr.people.findByUsername'
const USERNAME_PARAMETER = '&username='

export const getUserByUserName = async (username) => {
    const parameter = USERNAME_PARAMETER + username;
    const endpoint = buildEndpoint(GET_USER_BY_USERNAME, parameter);
    console.log('ENdoint >', endpoint)
    return axios.get(endpoint)
        .then(response => response.data.user)
        .catch(error => console.log(error));
}

export default { getUserByUserName }