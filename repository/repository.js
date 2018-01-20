const request = require('request-promise-native');

module.exports = {
  doSomething (coin) {
    return this.getCurrentPriceInUSD(coin);
  },
};
