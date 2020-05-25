const API_KEY = '697b65771a60c7f95e3e7561967e0408'
const API_KEY_PARAMETER = '$api_key='
const BASE_ENDPOINT = 'https://api.flickr.com/services/rest/?method='
const INTO_JSON_PARAMETER = '&format=json&nojsoncallback=1'

export function buildEndpoint(endpointName, parameters) {
    const apiKeyParameter = API_KEY_PARAMETER + API_KEY;
    return `${BASE_ENDPOINT}${endpointName}${apiKeyParameter}${parameters}${INTO_JSON_PARAMETER}`
}