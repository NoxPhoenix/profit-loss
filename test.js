const csvData = require('csvdata');

csvData.load('./csvTests/Coinbase-59dfaf27a4c3a002d6e0bf49-Transactions-Report-2018-01-23-19_28_34.csv')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
