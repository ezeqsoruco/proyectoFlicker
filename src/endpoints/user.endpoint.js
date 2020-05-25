import { buildEndpoint } from "./config";

const GET_USER_BY_USERNAME = 'flickr.people.findByUsername'
const USERNAME_PARAMETER = '&username='

export const getUserByUserName = async(username) => {
    const parameter = USERNAME_PARAMETER += username;
    const endpoint = buildEndpoint(GET_USER_BY_USERNAME, parameter);

    return axios.get(endpoint)
        .then(response => response.data.user)
        .catch(error => console.log(error));
}