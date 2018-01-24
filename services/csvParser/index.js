const CoinbaseData = require('./CoinbaseData');

function chooseStrategy (file) {
  switch (true) {
    default:
      return Promise.resolve(new CoinbaseData())
  }
}

module.exports = function parseCSV (filePath) {
  return chooseStrategy(csv)
    .then(strategy => strategy.parseCSV());
}