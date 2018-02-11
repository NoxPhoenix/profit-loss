const _ = require('lodash');

const PriceMixin = require('./price');
const TransactionMixin = require('./transactions');

const repository = Object.assign(
  PriceMixin,
  TransactionMixin,
  {
    getDataValues (modelRows) {
      return _.map(modelRows, 'dataValues');
    }
  }
);

module.exports = repository;
