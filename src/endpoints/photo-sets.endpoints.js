import { buildEndpoint } from "./config";

const GET_PHOTO_SET_ENDPOINT = 'flickr.photosets.getList'
const USER_ID_PARAMETER = '&user_id=';
const PAGE_PARAMETER = '&page=';
const PER_PAGE_PARAMETER = '&per_page=';
const PRIMARY_PHOTO_EXTRAS_PARAMETER = '&primary_photo_extras=';
const PHOTO_IDS_PARAMETER = '&photo_ids=';
const SORT_GROUPS_PARAMETER = '&sort_groups=';

const getPhotoSets = async(userId, page, perPage, primaryPhotoExtras, photosIds, sortGroups) => {
    let parametes = ''
    if (userId) parametes += USER_ID_PARAMETER + userId;
    if (page) parametes += PAGE_PARAMETER + page
    if (perPage) parametes += PER_PAGE_PARAMETER + perPage
    if (primaryPhotoExtras) parametes += PRIMARY_PHOTO_EXTRAS_PARAMETER + primaryPhotoExtras
    if (photosIds) parametes += PHOTO_IDS_PARAMETER + photosIds
    if (sortGroups) parametes += SORT_GROUPS_PARAMETER + sortGroups

    const endpoint = buildEndpoint(GET_PHOTO_SET_ENDPOINT, parametes);
    console.log('Endpoint: > ', endpoint);

    return axios.get(endpoint)
        .then(response => response.data.photosets)
        .catch(error => console.log(error));
}