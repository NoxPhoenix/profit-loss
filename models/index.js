const Sequelize = require('sequelize');

const config = require('../config');

const userData = new Sequelize({
  database: config.USERDATA_DATABASE,
  username: config.USERDATA_USERNAME,
  password: config.USERDATA_PASSWORD,
  host: config.USERDATA_SERVER,
  dialect: 'mysql',
});

const user = require('./user')(userData);
const trade = require('./trade')(userData);

trade.belongsTo(user); // add field to trades for relating to a user.id
