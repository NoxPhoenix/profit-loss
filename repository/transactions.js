const { Transaction } = require('../models');

module.exports = {
  getAllTransactionsForUser (userId) {
    return Transaction.findAll({
      where: {
        userId,
      },
    });
  },
};
