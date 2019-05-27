function getAll() {
  let cache = [];
  try {
    cache = JSON.parse(sessionStorage.getItem('apiCache'));
  } catch (e) {
    return {};
  }
  return cache || {};
}

function get(key, url) {
  const cache = getAll();
  const data = cache[key];
  if (!data || new Date(data.expire) < new Date() || url !== data.url) {
    return null;
  }
  return data;
}

async function save(key, url, data, minutes) {
  const res = await data;
  const now = new Date();
  const expire = now.setMinutes(now.getMinutes() + minutes);
  const cache = getAll();
  cache[key] = {
    data: res.data,
    url,
    expire,
  };
  sessionStorage.setItem('apiCache', JSON.stringify(cache));
}

function remove(key) {
  const cache = getAll();
  delete cache[key];
  sessionStorage.setItem('apiCache', JSON.stringify(cache));
}

function removeAll() {
  sessionStorage.removeItem('apiCache');
}

export default {
  get,
  getAll,
  save,
  remove,
  removeAll,
};
