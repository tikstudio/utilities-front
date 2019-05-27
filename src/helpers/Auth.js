function getToken() {
  return localStorage.getItem('token');
}

function setToken(token) {
  return localStorage.setItem('token', token);
}

function removeToken() {
  return localStorage.removeItem('token');
}


export default {
  getToken,
  setToken,
  removeToken,
};
