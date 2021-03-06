const Promise = require('bluebird');
const _ = require('lodash');
const { Transaction } = require('../models');

function findAllUniqueFieldValues (model, field, options = {}) {
  const aggragateOptions = Object.assign({}, { plain: false }, options);
  console.log('options', aggragateOptions);
  return model.aggregate(field, 'DISTINCT', aggragateOptions);
}

module.exports = {
  getAllTransactionsForUserId (userId) {
    return Transaction.findAll({
      where: {
        userId,
      },
    })
      .then(this.getDataValues);
  },

  getAllTransactionCurrenciesForUserId (userId) {
    return Promise.all([
      findAllUniqueFieldValues(Transaction, 'startingCurrency', { where: { userId } }),
      findAllUniqueFieldValues(Transaction, 'endingCurrency', { where: { userId } }),
    ])
      .then(_.flatten)
      .then(values => values.map(({ DISTINCT: value }) => value))
      .then(this.getDataValues);
  },
};
