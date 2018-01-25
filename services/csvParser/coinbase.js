const { readFile } = require('then-fs');
const csv = require('neat-csv');

const BaseStrategy = require('./baseStrategy');

/* eslint-disable arrow-parens */

module.exports = class CoinbaseData extends BaseStrategy {
  parseCSV () {
    return readFile(this.csvDataPath, 'utf8')
      .then(contents => {
        const header = contents.match(/^([\s\S]*)(Time)/)[1];
        return contents.replace(header, '');
      })
      .then(data => csv(data))
      .catch((err) => {
        console.log(err);
      });
  }
};
