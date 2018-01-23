const { time } = require('../../utils');
const BaseAggragateInterval = require('./baseStrategy');

module.exports = class Minute extends BaseAggragateInterval {
  timeRange () {
    this.startTime = this.endTime.subtract(60, 'minutes');
    const range = time.range(this.startTime, this.endTime);
    // returns an array of moment.js instances for every 4 minutes of time in the time range.
    return range.by('minute', { step: 4 });
  }
};
