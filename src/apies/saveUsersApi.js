import axios from "axios/index";

const API_URL = 'http://localhost:5000';

export function saveUsersApi(data) {
    return axios.post(API_URL + "/save-users",{data})
}