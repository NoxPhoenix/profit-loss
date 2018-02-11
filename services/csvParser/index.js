const CoinbaseData = require('./coinbase');

function chooseStrategy (userId, filePath) {
  switch (true) {
    case (filePath.includes('Coinbase')):
      return Promise.resolve(new CoinbaseData(userId, filePath));
    default:
      return Promise.resolve(new CoinbaseData(userId, filePath));
  }
}

module.exports = (userId, filePath) => {
  return chooseStrategy(userId, filePath)
    .then(strategy => (
      strategy.parseCSV()
        .then(data => strategy.createTrades(data))
        .then(cleanData => strategy.saveTransactions(cleanData))
    ))
    .catch((err) => {
      throw err;
    });
};
