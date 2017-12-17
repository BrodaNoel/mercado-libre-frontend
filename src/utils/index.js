import queryString from 'query-string';

export default {
  getQueryString: (location) => queryString.parse(location.search),

  /**
   * ZeroFill behavior in Javascript.
   * Taken form https://stackoverflow.com/questions/5366849/convert-1-to-0001-in-javascript
   */
  zeroFill: (number) => {
    const str = '' + number;
    let pad = '00';
    return pad.substring(0, pad.length - str.length) + str;
  }
};
