// axios.js

import axios from 'axios';

// Create an instance of axios with custom configuration
const instance = axios.create({
  baseURL: 'http://epawo-test.egolepay.com', 
  headers: {
    'Content-Type': 'application/json',
    // You can add more default headers here if needed
  },
});

// Request interceptor (optional)
instance.interceptors.request.use(
  (config) => {
    // You can modify the request config here before it's sent
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// Response interceptor (optional)
instance.interceptors.response.use(
  (response) => {
    // You can modify the response here before it's returned to the caller
    return response;
  },
  (error) => {
    // Handle response error here
    return Promise.reject(error);
  }
);

export default instance;
