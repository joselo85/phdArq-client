import axios from 'axios'

const httpService = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_BASE_URL_LOCAL
      : process.env.REACT_APP_BASE_URL_PRODUCTION,
  timeout: 10000,
})

httpService.interceptors.response.use(
  (response) => response,
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500

    if (!expectedError) {
      console.error('interceptor-error:', error)
      return Promise.reject(new Error('Unexpected Error Ocurred'))
    }
    return Promise.reject(error.response.data)
  },
)

export default httpService
