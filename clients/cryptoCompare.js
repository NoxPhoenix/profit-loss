const request = require('request-promise-native');

module.exports = {
  getCurrent (query) {
    const options = {
      url: 'https://min-api.cryptocompare.com/data/price?',
      qs: query,
    };
    return request(options)
      .then(price => price);
  },

  getHistoricalPriceByMinute (query) {
    const options = {
      url: 'https://min-api.cryptocompare.com/data/histominute?',
      qs: query,
    };
    console.log(options.url);
    return request(options)
      .then(prices => prices);
  },
};
