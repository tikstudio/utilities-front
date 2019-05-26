import axios from "axios";
import { stringify as qs } from 'querystringify';

const API_URL = 'http://localhost:5000';

axios.defaults.baseURL = API_URL;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export function login(data) {
  return axios.post('/users/login', {
    username: data.username,
    password: data.password,
  })
}

export function getPeoples(page) {
  const query = qs({
    page: page
  });
  return axios.get(`/peoples?${query}`)
}
