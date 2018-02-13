const Promise = require('bluebird');
const _ = require('lodash');

const csvParser = require('./services/csvParser');
const calculateAggregateIntervalProfitLoss = require('./services/calculateAggregateIntervalProfitLoss');
const { User, Transaction } = require('./models');
const repository = require('./repository');
const timeRange = require('./services/generateTimeRange');

function wait (milliseconds) {
  return new Promise(resolve => setTimeout(() => resolve(), milliseconds));
}

// User.create({ username: 'nug man', password: 'butts' });

// wait(8000)
//   .then(() => {
//     return csvParser('212f3b8d-913d-4a6b-b28a-ddb5e1164461', './csvTests/Coinbase-59dfaf27a4c3a002d6e0bf4d-Transactions-Report-2018-01-27-05_39_47.csv')
//       .then((parsed) => {
//         console.log(parsed);
//       });
//   });

// wait(3000)
//   .then(() => {
//     return calculateAggregateIntervalProfitLoss(null, '212f3b8d-913d-4a6b-b28a-ddb5e1164461');
//   });

timeRange('hour', new Date())
  .then((vari) => {
    console.log('test');
    console.log(vari);
  });

// User.findOne({
//   where: {
//     username: 'nug man',
//   },
// })
//   .then(({ id }) => Transaction.create({
//     date: '1999010101',
//     exchange: 'Coinbase',
//     amount: 0.332,
//     startingCurrency: 'BUTT',
//     endingCurrency: 'BTC',
//     type: 'Purchase',
//     userId: id,
//   }, { validate: true }))
//   .then((created) => {
//     console.log(created);
//   });

// Transaction.aggregate('endingCurrency', 'DISTINCT', { plain: false })
//   .then((trades) => {
//     console.log(trades);
//   });

// profitService.perform(null, '3cd8c833-86f9-4a7f-84fb-78c76139b3e2')
//   .then(transactions => console.log(Object.keys(transactions)));
