const _ = require('lodash');
const { cryptoCompareClient } = require('../clients');

const baseParams = ['fsym', 'tsyms', 'e'];
const historicalParams = baseParams.concat(['tsym', 'aggregate', 'limit']);

module.exports = {
  getCurrentPriceInUSD (coin, e = 'CCCAGG') {
    return cryptoCompareClient.getCurrent({ fsym: coin, tsyms: 'USD', e });
  },

  getHistoricalPriceByMinute (coin, options = {}) {
    const query = _.pick(Object.assign(
      {},
      {
        fsym: coin,
        tsym: 'USD',
        e: 'CCCAGG',
      },
      options
    ), historicalParams);
    console.log(query);
    return cryptoCompareClient.getHistoricalPriceByMinute(query);
  },
};
