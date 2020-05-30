import { getData } from "./config";

const GET_COMMENTS_ENDPOINT = 'flickr.photos.comments.getList';
const PHOTO_ID_PARAMETER = '&photo_id=';
const MIN_COMMENT_DATE_PARAMETER = '&min_comment_date=';
const MAX_COMMENT_DATE_PARAMETER = '&max_comment_date=';

export const getComments = async (photoId, minComentDate, maxCommentDate) => {
    let parameters = ''
    if (photoId) parameters += PHOTO_ID_PARAMETER + photoId;
    if (minComentDate) parameters += MIN_COMMENT_DATE_PARAMETER + minComentDate
    if (maxCommentDate) parameters += MAX_COMMENT_DATE_PARAMETER + maxCommentDate

    return getData(GET_COMMENTS_ENDPOINT, parameters)
        .then(data => {
            return data.comments.comment
        })
        .catch(error => console.log(error));
}

export default { getComments }