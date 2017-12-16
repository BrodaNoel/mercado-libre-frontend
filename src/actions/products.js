import api from 'api';

const search = (value) => {
  return api.products.search(value)
    .then((r) => r.data.items);
};

const getById = (id) => {
  return api.products.getById(id)
    .then((r) => r.data.item);
};

export default {
  search,
  getById
};
