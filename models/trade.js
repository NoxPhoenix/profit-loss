const Sequelize = require('sequelize');

const currencySymbols = require('../utils/globals/currencySymbols');

module.exports = (database) => {
  return database.define('trade', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM,
      values: ['purchase', 'withdrawal', 'deposit', 'trade', 'transfer'],
      allowNull: false,
    },
    amount: {
      type: Sequelize.DECIMAL,
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
    exchange: {
      type: Sequelize.ENUM,
      values: ['Coinbase', 'Binance', 'Bittrex', 'CoinExchange.io'],
      allowNull: false,
    },
  });
};
