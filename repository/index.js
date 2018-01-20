const RepositoryMixin = require('./repository');
const PriceMixin = require('./price');

const repository = Object.assign(
  RepositoryMixin,
  PriceMixin
);

module.exports = repository;
