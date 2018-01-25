const Sequelize = require('sequelize');

const currencySymbols = require('../utils/globals/currencySymbols');

module.exports = function user (database) {
  return database.define('user', {
    id: {
      type: Sequelize.UUID,
      default: Sequelize.UUIDV4,
      primaryKey: true,
    },
    exchange: {
      type: Sequelize.ENUM,
      values: ['Coinbase', 'Binance', 'Bittrex', 'CoinExchange.io'],
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM,
      values: ['purchase', 'withdrawal', 'deposit', 'trade'],
      allowNull: false,
    },
    startingCurrency: {
      type: Sequelize.ENUM,
      values: currencySymbols,
      allowNull: false,
    },
    endingCurrency: {
      type: Sequelize.ENUM,
      values: currencySymbols,
      allowNull: false,
    },
  });
};
