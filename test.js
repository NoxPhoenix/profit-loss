const csvParser = require('./services/csvParser');
const { user, trade } = require('./models');

// csvData.load('./csvTests/Coinbase-59dfaf27a4c3a002d6e0bf49-Transactions-Report-2018-01-23-19_28_34.csv')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// csvParser('./csvTests/Coinbase-59dfaf27a4c3a002d6e0bf49-Transactions-Report-2018-01-23-19_28_34.csv')
//   .then((parsed) => {
//     console.log(parsed);
//   });

user.findOne({
  where: {
    username: 'nug man',
  },
})
  .then(({ id }) => trade.create({
    date: '1999010101',
    exchange: 'Coinbase',
    startingCurrency: 'USD',
    endingCurrency: 'BTC',
    type: 'Purchase',
    userId: id,
  }))
  .then((created) => {
    console.log(created);
  });
