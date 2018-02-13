const { time } = require('../../utils');
const BaseAggragateInterval = require('./baseStrategy');

module.exports = class Hour extends BaseAggragateInterval {
  timeRange () {
    this.startTime = this.endTime.clone().subtract(60, 'minutes');
    const range = time.range(this.startTime, this.endTime);
    // returns an array of moment.js instances for every 4 minutes of time in the time range.
    return Array.from(range.by('minute', { step: 2 }));
  }
};
