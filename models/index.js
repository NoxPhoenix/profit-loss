const Sequelize = require('sequelize');

const config = require('../config');

const userData = new Sequelize({
  database: config.USERDATA_DATABASE,
  username: config.USERDATA_USERNAME,
  password: config.USERDATA_PASSWORD,
  host: config.USERDATA_SERVER,
  port: config.USERDATA_PORT,
  dialect: 'mysql',
});

const User = require('./user')(userData);
const Transaction = require('./transaction')(userData);

Transaction.belongsTo(User); // add field to transactions for relating to a user.id

User.sync()
  .then(() => {
    console.log('users table created!');
  });

Transaction.sync()
  .then(() => {
    console.log('trades table created!');
  });

module.exports = {
  User,
  Transaction,
};
