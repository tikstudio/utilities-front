import axios from 'axios';
import {stringify as qs} from 'querystringify';
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

export function destroyPeoples(id) {
  return axios.delete(`/peoples?id=${id}`);
}

export function getPeoples(data, page, totalPage) {
  const query = qs(data, page, totalPage);
  return axios.get(`/peoples?${query}`);
}

export function registrationPeople(data) {
  return axios.put(`/peoples`, {
    name: data.name,
    l_name: data.l_name,
    m_name: data.m_name,
    phone: data.phone,
    passport: data.passport,
    region_id: data.region_id,
    address: data.address,
    deleted: data.deleted,
  });
}

export function searchPeoples(search) {
  return axios.post(`/peoples/search?search=${search}`);
}

export function searchCalc(search) {
  return axios.post(`/calculators/search?search=${search}`);
}

export function editPeople(data) {
  return axios.post(`/peoples`, {
    id: data.id,
    name: data.name,
    l_name: data.l_name,
    m_name: data.m_name,
    phone: data.phone,
    passport: data.passport,
    region_id: data.region_id,
    address: data.address,
    deleted: data.deleted,
  });
}

export function getTypes() {
  const url = '/types';
  const cache = Cache.get('getTypes', url);

  if (cache) return cache;

  const data = axios.get('/types');

  Cache.save('getTypes', url, data, 60);

  return data;
}
