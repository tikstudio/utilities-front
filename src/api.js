import axios from 'axios';
import { stringify as qs } from 'querystringify';
import Auth from './helpers/Auth';
import Cache from './helpers/Cache';

const API_URL = 'http://localhost:5000';

axios.defaults.baseURL = API_URL;
axios.interceptors.request.use((config) => {
  const c = config;
  const token = Auth.getToken();
  if (token) {
    c.headers.Authorization = token;
  }
  return c;
}, error => Promise.reject(error));

export function login(data) {
  Cache.removeAll();
  return axios.post('/users/login', {
    username: data.username,
    password: data.password,
  });
}

export function getPeoples(page) {
  const query = qs({
    page,
  });
  return axios.get(`/peoples?${query}`);
}

export function getTypes() {
  const url = '/types';
  const cache = Cache.get('getTypes', url);

  if (cache) return cache;

  const data = axios.get('/types');

  Cache.save('getTypes', url, data, 60);

  return data;
}
