const API_KEY = '697b65771a60c7f95e3e7561967e0408'
const BASE_ENDPOINT = 'https://api.flickr.com/services/rest/?method='
const INTO_JSON_FRAGMENT = '&format=json&nojsoncallback=1'

export function buildEndpoint(endpointName, parameters) {
    return `${BASE_ENDPOINT0}${endpointName}${parameters}${INTO_JSON_FRAGMENT}`
}