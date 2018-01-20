const repository = require('./repository');
const config = require('./config');

repository.getCurrentPriceInUSD('BTC')
  .then((price) => {
    console.log(price);
  })
  .catch((err) => {
    console.warn(err);
  });

console.log(config.USERDATA_SERVER);

