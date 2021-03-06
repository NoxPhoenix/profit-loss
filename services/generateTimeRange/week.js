const { time } = require('../../utils');
const BaseAggragateInterval = require('./baseStrategy');

module.exports = class Week extends BaseAggragateInterval {
  timeRange () {
    this.startTime = this.endTime.subtract(7, 'days');
    const range = time.range(this.startTime, this.endTime);
    // returns an array of moment.js instances for every 3.7 hours of time in the time range.
    return { range, agi: Array.from(range.by('minute', { step: 336 })) };
  }
};
