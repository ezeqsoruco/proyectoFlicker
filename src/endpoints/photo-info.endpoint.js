import { buildEndpoint } from "./config";
import axios from 'axios';

const GET_PHOTOS_INFO_ENDPOINT = 'flickr.photos.getInfo';

const USER_ID_PARAMETER = '&photo_id=';



export const getPosted = async (photoId) => {
    let parameters = '';
    if (photoId) parameters += USER_ID_PARAMETER + photoId

    const endpoint = buildEndpoint(GET_PHOTOS_INFO_ENDPOINT, parameters);
    console.log('Endpoint INFO IMG:>>>> > ', endpoint);

    return axios.get(endpoint)
        .then(response => response.data.photo.dates.posted)
        .catch(error => console.log(error));
}

export default { getPosted }