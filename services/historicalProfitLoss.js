const Promise = require('bluebird');
const _ = require('lodash');

const repository = require('../repository');

function separateTransactionsByCurrency (transactions, currencies) {
  return Promise.map(currencies, (currency) => {
    const relevantTransaction = _.filter(transactions, ({ startingCurrency, endingCurrency }) => startingCurrency === currency || endingCurrency === currency); 
  })
}

module.exports = {
  perform (timeRange, userId) {
    // fetch users transactions
    // establish coins being calculated
    // separate transactions into coins affected

    return Promise.all([
      repository.getAllTransactionsForUserId(userId),
      repository.getAllTransactionCurrenciesForUserId(userId),
    ])
      .spread(separateTransactionsByCurrency);
  },
};
