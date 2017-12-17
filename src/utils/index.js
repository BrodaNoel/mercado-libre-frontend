import queryString from 'query-string';

export default {
  getQueryString: (location) => queryString.parse(location.search)
};
