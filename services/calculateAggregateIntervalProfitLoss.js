const Promise = require('bluebird');
const _ = require('lodash');

const repository = require('../repository');

function separateTransactionsByCurrency ({ transactions, currencies }) {
  return Promise.map(currencies, (currency) => {
    const relevantTransactions = _.filter(transactions, ({ startingCurrency, endingCurrency }) => startingCurrency === currency || endingCurrency === currency);
    return { [currency]: relevantTransactions };
  })
    .then(transactionsByCoin => Object.assign({}, ...transactionsByCoin));
}

function determineAllCurrencies (transactions) {
  const startingCurrencies = [...new Set(_.map(transactions, 'startingCurrency'))];
  const endingCurrencies = [...new Set(_.map(transactions, 'endingCurrency'))];
  return { transactions, currencies: _.union(startingCurrencies, endingCurrencies) };
}

function calculate (coin, transactions, aggragateIntervals) {
  // fetch all prices for coin in agi
}

module.exports = function perform (timeRange, userId) {
    // fetch users transactions
    // establish coins being calculated
    // separate transactions into coins affected

  return repository.getAllTransactionsForUserId(userId)
    .then(determineAllCurrencies)
    .then(separateTransactionsByCurrency)
    .then((console.log));
};
