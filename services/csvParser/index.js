const CoinbaseData = require('./CoinbaseData');

function chooseStrategy (csv) {
  switch (true) {
    default:
      return Promise.resolve(new CoinbaseData())
  }
}

module.exports = function parseCSV (csv) {
  return chooseStrategy(csv)
    .then(strategy => strategy.parseCSV());
}