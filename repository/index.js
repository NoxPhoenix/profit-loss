const PriceMixin = require('./price');
const TransactionMixin = require('./transactions');

const repository = Object.assign(
  PriceMixin,
  TransactionMixin
);

module.exports = repository;
