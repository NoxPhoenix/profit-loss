const Promise = require('bluebird');
const _ = require('lodash');

const repository = require('../repository');
const generateTimeRange = require('../services/generateTimeRange');
const time = require('../utils/time');

function separateTransactionsByCurrency ({ transactions, currencies }) {
  return Promise.map(currencies, (currency) => {
    const relevantTransactions = _.filter(
      transactions,
      ({ startingCurrency, endingCurrency }) => startingCurrency === currency || endingCurrency === currency
    );
    return { [currency]: relevantTransactions };
  })
    .then(transactionsByCoin => Object.assign({}, ...transactionsByCoin));
}

function determineAllCurrencies (transactions) {
  const startingCurrencies = [...new Set(_.map(transactions, 'startingCurrency'))];
  const endingCurrencies = [...new Set(_.map(transactions, 'endingCurrency'))];
  return { transactions, currencies: _.pullAll(_.union(startingCurrencies, endingCurrencies), [null, 'USD']) };
}

function getAndOrganizeTransactions (userId) {
  return repository.getAllTransactionsForUserId(userId)
    .then(determineAllCurrencies) // Determine the specific currencies that are invested in.
    .then(separateTransactionsByCurrency); // Separate the transactions into an object with an array keyed for each currency.
}

function separateAggregateIntervalsByTransactions (transactions, aggregateIntervals, timeRange) {
  const sortedTransactions = time.sortOldestToNewest(transactions, 'date');
  /* eslint-disable array-callback-return, consistent-return */
  const separateIntervals = sortedTransactions.map(({ date }) => {
    if (time.format(date).within(timeRange)) return _.remove(aggregateIntervals, i => time.isBefore(i, date));
  });
  /* eslint-enable array-callback-return, consistent-return */
  return [...separateIntervals, aggregateIntervals];
}

function caclulateHoldings (transactions, endTime) {
const relevanteTransaction = transactions.filter(transaction => time.isBefore(transaction.date, endTime));

}

function calculate (coin, transactions, aggregateIntervals, timeRange) {
  return Promise.all([
    separateAggregateIntervalsByTransactions(transactions, aggregateIntervals, timeRange),
    repository.getHistoricalPriceForHourAGI(coin, aggregateIntervals[aggregateIntervals.length - 1]),
  ])
    .spread((intervalGroups, prices) => {
      console.log(intervalGroups);
    });
}

module.exports = function perform ({ length, endTime }, userId) {
  return Promise.all([getAndOrganizeTransactions(userId), generateTimeRange(length, endTime)])
    .spread((organizedTransactions, { range: timeRange, agi: aggregateIntervals }) => (
      Promise.map(
        Object.keys(organizedTransactions),
        coin => calculate(coin, organizedTransactions[coin], aggregateIntervals, timeRange)
      )
    ));
};
