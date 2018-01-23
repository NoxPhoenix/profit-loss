const Sequelize = require('sequelize');

const config = require('../config');

const userData = new Sequelize({
  database: config.USERDATA_DATABASE,
  username: config.USERDATA_USERNAME,
  password: config.USERDATA_PASSWORD,
  host: config.USERDATA_SERVER,
  dialect: 'mysql',
});

require('./users')(userData);
