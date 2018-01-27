// const csvParser = require('./services/csvParser');
// const { User, Trade } = require('./models');
const repository = require('./repository');

// csvParser('3cd8c833-86f9-4a7f-84fb-78c76139b3e2', './csvTests/Coinbase-59dfaf27a4c3a002d6e0bf49-Transactions-Report-2018-01-23-19_28_34.csv')
//   .then((parsed) => {
//     console.log(parsed);
//   });

// user.findOne({
//   where: {
//     username: 'nug man',
//   },
// })
//   .then(({ id }) => trade.create({
//     date: '1999010101',
//     exchange: 'Coinbase',
//     startingCurrency: 'USD',
//     endingCurrency: 'BTC',
//     type: 'Purchase',
//     userId: id,
//   }))
//   .then((created) => {
//     console.log(created);
//   });

repository.getAllTransactionsForUser('3cd8c833-86f9-4a7f-84fb-78c76139b3e2')
  .then((trades) => {
    console.log(trades);
  });
