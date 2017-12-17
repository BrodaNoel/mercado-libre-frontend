import queryString from 'query-string';

export default {
  getQueryString: (location) => queryString.parse(location.search),

  /**
   * ZeroFill behavior in Javascript.
   * Taken from https://stackoverflow.com/questions/5366849/convert-1-to-0001-in-javascript
   */
  zeroFill: (number) => {
    const str = '' + number;
    let pad = '00';
    return pad.substring(0, pad.length - str.length) + str;
  },

  /**
   * Currency formater.
   * Taken from https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
   */
  parseCurrency: (number) => Number(number.toFixed(0)).toLocaleString('es')
};
