const Promise = require('bluebird');

const csvParser = require('./services/csvParser');
const { User, Transaction } = require('./models');
const repository = require('./repository');
const profitService = require('./services/historicalProfitLoss');

// csvParser('3cd8c833-86f9-4a7f-84fb-78c76139b3e2', './csvTests/Coinbase-59dfaf27a4c3a002d6e0bf4d-Transactions-Report-2018-01-27-05_39_47.csv')
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

// Transaction.aggregate('endingCurrency', 'DISTINCT', { plain: false })
//   .then((trades) => {
//     console.log(trades);
//   });

profitService.perform(null, '3cd8c833-86f9-4a7f-84fb-78c76139b3e2');
