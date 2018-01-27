const Sequelize = require('sequelize');

const currencySymbols = require('../utils/globals/currencySymbols');

module.exports = (database) => {
  return database.define('trade', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      unique: 'compositeIndex',
    },
    type: {
      type: Sequelize.ENUM,
      values: ['purchase', 'withdrawal', 'deposit', 'trade', 'transfer'],
      allowNull: false,
      unique: 'compositeIndex',
    },
    amount: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      unique: 'compositeIndex',
    },
    startingCurrency: {
      type: Sequelize.ENUM,
      values: currencySymbols,
      allowNull: false,
      unique: 'compositeIndex',
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
      unique: 'compositeIndex',
    },
  });
};
