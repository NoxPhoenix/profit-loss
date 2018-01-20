const repository = require('./repository');

repository.getHistoricalPriceByMinute('BTC')
  .then((price) => {
    console.log(price);
  })
  .catch((err) => {
    console.warn(err);
  });

