import axios from 'axios'

export const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : "http://localhost:5000",
    timeout: 30000,
  });