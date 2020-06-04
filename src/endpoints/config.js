import axios from 'axios';
import { getLocalData, storeLocalData } from '../storage/local-storage'
import Toast from 'react-native-simple-toast';

const API_KEY = '0b591382ba6495fe2e5d7df91b69f7d2'
const API_KEY_PARAMETER = '&api_key='
const BASE_ENDPOINT = 'https://www.flickr.com/services/rest/?method='
const INTO_JSON_PARAMETER = '&format=json&nojsoncallback=1'
const TIMEOUT_IN_MS = 10 * 1000;
const ENDPOINT_ERROR_MESSAGE = 'Ocurrio un error tratando de conectarse a flickr :( Intenta mas tarde!'

export const buildEndpoint = (endpointName, parameters) => {
  const apiKeyParameter = API_KEY_PARAMETER + API_KEY;
  return `${BASE_ENDPOINT}${endpointName}${apiKeyParameter}${parameters}${INTO_JSON_PARAMETER}`
}

export const getData = (endpointName, parameters) => {
  const config = { timeout: TIMEOUT_IN_MS }
  const endpoint = buildEndpoint(endpointName, parameters)

  return axios.get(endpoint, config)
    .then((respose) => {
      storeLocalData(respose.data, endpoint)
      return respose.data
    })
    .catch((_) => {
      Toast.show(ENDPOINT_ERROR_MESSAGE);
      return getLocalData(endpoint)
    })
}
