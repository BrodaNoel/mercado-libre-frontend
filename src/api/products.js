import config from 'config.json';

const search = (value) => {
  return fetch(`${config.baseUrl}/api/items?q=${value}`)
    .then((r) => r.json());
};

const getById = (id) => {
  return fetch(`${config.baseUrl}/api/items/${id}`)
    .then((r) => r.json());
};

export default {
  search,
  getById
};
