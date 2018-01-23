const Sequelize = require('sequelize');

module.exports = function user (database) {
  return database.define('user', {
    id: {
      type: Sequelize.UUID,
      default: Sequelize.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.CHAR(32),
      allowNull: false,
    },
  });
};
