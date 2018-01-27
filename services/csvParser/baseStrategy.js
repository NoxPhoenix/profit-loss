const { Transaction } = require('../../models');

/* eslint-disable class-methods-use-this */

module.exports = class BaseStrategy {
  constructor (userId, csvDataPath) {
    this.csvDataPath = csvDataPath;
    this.userId = userId;
  }

  transactionType (startingCurrency, endingCurrency, amount) {
    switch (true) {
      case (startingCurrency === 'USD'):
        return 'purchase';
      case (endingCurrency === 'USD'):
        return 'withdrawal';
      case (!startingCurrency && amount < 0):
        return 'transfer';
      case (!startingCurrency && amount > 0):
        return 'deposit';
      default:
        return 'trade';
    }
  }

  saveTransactions (transactions) {
    return Transaction.bulkCreate(transactions, { validate: true });
  }
};
