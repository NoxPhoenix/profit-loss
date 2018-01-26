const Sequelize = require('sequelize');

const config = require('../config');

const userData = new Sequelize({
  database: config.USERDATA_DATABASE,
  username: config.USERDATA_USERNAME,
  password: config.USERDATA_PASSWORD,
  host: config.USERDATA_SERVER,
  dialect: 'mysql',
});

const User = require('./user')(userData);
const Trade = require('./trade')(userData);

Trade.belongsTo(User); // add field to trades for relating to a user.id

User.sync()
  .then(() => {
    console.log('users table created!');
  });

Trade.sync()
  .then(() => {
    console.log('trades table created!');
  });

module.exports = {
  User,
  Trade,
};
