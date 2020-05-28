import { buildEndpoint } from "./config";
import axios from 'axios';

const GET_PHOTO_SET_ENDPOINT = 'flickr.photosets.getList';
const GET_PHOTOS_ENDPOINT = 'flickr.photosets.getPhotos';

const USER_ID_PARAMETER = '&user_id=';
const PAGE_PARAMETER = '&page=';
const PER_PAGE_PARAMETER = '&per_page=';
const PRIMARY_PHOTO_EXTRAS_PARAMETER = '&primary_photo_extras=';
const PHOTO_IDS_PARAMETER = '&photo_ids=';
const SORT_GROUPS_PARAMETER = '&sort_groups=';
const PHOTOSET_ID_PARAMETER = '&photoset_id='
const EXTRAS_PARAMETER = '&extras='
const PRIVACY_FILTER_PARAMETER = '&privacy_filter='
const MEDIA_PARAMETER = '&media='

export const getPhotoSets = async (userId, page, perPage, primaryPhotoExtras, photosIds, sortGroups) => {
    let parameters = ''
    if (userId) parameters += USER_ID_PARAMETER + userId;
    if (page) parameters += PAGE_PARAMETER + page
    if (perPage) parameters += PER_PAGE_PARAMETER + perPage
    if (primaryPhotoExtras) parameters += PRIMARY_PHOTO_EXTRAS_PARAMETER + primaryPhotoExtras
    if (photosIds) parameters += PHOTO_IDS_PARAMETER + photosIds
    if (sortGroups) parameters += SORT_GROUPS_PARAMETER + sortGroups

    const endpoint = buildEndpoint(GET_PHOTO_SET_ENDPOINT, parameters);
    console.log('Endpoint: > ', endpoint);

    return axios.get(endpoint)
        .then(response => {
            return response.data.photosets
        })
        .catch(error => console.log(error));
}

export const getPhotos = async (photosetId, userId, extras, perPage, page, privacyFilter, media) => {
    let parameters = '';
    if (photosetId) parameters += PHOTOSET_ID_PARAMETER + photosetId
    if (userId) parameters += USER_ID_PARAMETER + userId
    if (extras) parameters += EXTRAS_PARAMETER + extras
    if (perPage) parameters += PER_PAGE_PARAMETER + perPage
    if (page) parameters += PAGE_PARAMETER + page
    if (privacyFilter) parameters += PRIVACY_FILTER_PARAMETER + privacyFilter
    if (media) parameters += MEDIA_PARAMETER + media

    const endpoint = buildEndpoint(GET_PHOTOS_ENDPOINT, parameters);
    console.log('Endpoint:>>>> > ', endpoint);

    return axios.get(endpoint)
        .then(response => response.data.photoset.photo)
        .catch(error => console.log(error));
}

export default { getPhotoSets, getPhotos }