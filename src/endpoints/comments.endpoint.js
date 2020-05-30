import { buildEndpoint } from "./config";
import axios from 'axios';

const GET_COMMENTS_ENDPOINT= 'flickr.photos.comments.getList';
const PHOTO_ID_PARAMETER= '&photo_id=';
const MIN_COMMENT_DATE_PARAMETER= '&min_comment_date=';
const MAX_COMMENT_DATE_PARAMETER= '&max_comment_date=';

export const getComments = async (photoId, minComentDate, maxCommentDate) => {
    let parameters = ''
    if (photoId) parameters += PHOTO_ID_PARAMETER + photoId;
    if (minComentDate) parameters += MIN_COMMENT_DATE_PARAMETER + minComentDate
    if (maxCommentDate) parameters += MAX_COMMENT_DATE_PARAMETER + maxCommentDate

    const endpoint = buildEndpoint(GET_COMMENTS_ENDPOINT, parameters);
    console.log('Endpoint: > ', endpoint);

    return axios.get(endpoint)
        .then(response => {
            return response.data.comments.comment
        })
        .catch(error => console.log(error));
}

export default { getComments }