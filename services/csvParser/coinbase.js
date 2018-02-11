const Promise = require('bluebird');
const { readFile } = require('then-fs');
const csv = require('neat-csv');

const BaseStrategy = require('./baseStrategy');

/* eslint-disable class-methods-use-this */

module.exports = class CoinbaseData extends BaseStrategy {
  parseCSV () {
    return readFile(this.csvDataPath, 'utf8')
      .then((contents) => {
        const header = contents.match(/^([\s\S]*)(Time)/)[1];
        return contents.replace(header, '');
      })
      .then(data => csv(data))
      .catch((err) => {
        console.log(err);
      });
  }

  createTrades (data) {
    console.log(this.csvDataPath);
    return Promise.map(data, (transaction) => {
      const startingCurrency = transaction['Transfer Total Currency'] || null;
      const endingCurrency = transaction.Currency;
      const type = this.transactionType(startingCurrency, endingCurrency, transaction.Amount);
      return {
        date: transaction.Timestamp,
        exchange: 'Coinbase',
        type,
        amount: Math.abs(parseFloat(transaction.Amount, 10)),
        startingCurrency,
        endingCurrency,
        userId: this.userId,
      };
    })
      .catch((err) => {
        throw err;
      });
  }
};
