import axios from 'axios'


const currentUrl  = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : "http://localhost:5000"

export const instance = axios.create({
    baseURL: currentUrl,
    timeout: 30000,
  });


