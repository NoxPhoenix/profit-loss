const request = require('request-promise-native');
const _ = require('lodash');

function buildQuery (query) {
  const params = _.map(Object.keys(query), prop => `${prop}=${query[prop]}`);
  return params.join('&');
}

module.exports = {
  getCurrent (query) {
    const options = {
      url: `https://min-api.cryptocompare.com/data/price?${buildQuery(query)}`,
    };
    return request(options)
      .then(price => price);
  },

  getHistoricalPriceByMinute (query) {
    const options = {
      url: `https://min-api.cryptocompare.com/data/histominute?${buildQuery(query)}`,
    };
    console.log(options.url);
    return request(options)
      .then(prices => prices);
  },
};
