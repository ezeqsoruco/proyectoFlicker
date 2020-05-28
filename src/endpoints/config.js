const API_KEY = '0b591382ba6495fe2e5d7df91b69f7d2'
// const API_KEY = '6e8a597cb502b7b95dbd46a46e25db8d'
const API_KEY_PARAMETER = '&api_key='
const BASE_ENDPOINT = 'https://www.flickr.com/services/rest/?method='
const INTO_JSON_PARAMETER = '&format=json&nojsoncallback=1'

export function buildEndpoint(endpointName, parameters) {
    const apiKeyParameter = API_KEY_PARAMETER + API_KEY;
    return `${BASE_ENDPOINT}${endpointName}${apiKeyParameter}${parameters}${INTO_JSON_PARAMETER}`
}