const time = require('../../utils/time');

module.exports = class BaseAggragateInterval {
  constructor (endTime) {
    this.endTime = time.format(endTime).startOf('minute');
  }
};
