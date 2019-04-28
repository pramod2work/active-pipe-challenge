import axios from 'axios'

export const apiUriConfig = {
  listProperties: '/data.json',
}


const axiosInstance = axios.create({
  baseURL: '',
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

export function getApiConfig() {
  return axiosInstance
}
