const CoinbaseData = require('./coinbase');

function chooseStrategy (filePath) {
  switch (true) {
    case (filePath.includes('coinbase')):
      return Promise.resolve(new CoinbaseData(filePath));
    default:
      return Promise.resolve(new CoinbaseData(filePath));
  }
}

module.exports = function parseCSV (filePath) {
  return chooseStrategy(filePath)
    .then(strategy => strategy.parseCSV());
};
