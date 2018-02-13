const _ = require('lodash');
const { cryptoCompareClient } = require('../clients');

const time = require('../utils/time');

const baseParams = ['fsym', 'tsyms', 'e'];
const historicalParams = baseParams.concat(['tsym', 'aggregate', 'limit', 'toTs']);

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

  getHistoricalPriceForHourAGI (coin, endingTime) {
    if (time.isBefore(endingTime, time.now().subtract(7, 'days'))) throw new Error('Date to old for hour data');
    const query = {
      toTs: time.unix(endingTime),
      aggregate: 4,
    };
    return this.getHistoricalPriceByMinute(coin, query);
  },
};
