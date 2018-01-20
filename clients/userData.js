const mySQL = require('promise-mysql');

const config = require('../config');

const db = mySQL.createConnection({
  host: config.USERDATA_SERVER,
  user: config.USERDATA_USERNAME,
  password: config.USERDATA_PASSWORD,
})
  .then((connection) => {
    console.log('Connected to the database.', connection);
    return connection;
  })
  .catch((err) => {
    console.warn('Could not connect to database!', err);
  });

process.on('exit', () => db.end());
