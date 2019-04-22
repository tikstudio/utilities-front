import axios from "axios";

const API_URL = 'http://localhost:5000';

export function signIn(data) {
    return axios.post(API_URL + "/signIn",{data})
}
