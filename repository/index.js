const RepositoryMixin = require('./repository');
const PriceMixin = require('./price');
const TransactionMixin = require('./transactions');

const repository = Object.assign(
  RepositoryMixin,
  PriceMixin,
  TransactionMixin
);

module.exports = repository;
