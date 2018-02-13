const { time } = require('../../utils');
const BaseAggragateInterval = require('./baseStrategy');

module.exports = class Day extends BaseAggragateInterval {
  timeRange () {
    this.startTime = this.endTime.subtract(24, 'hours');
    const range = time.range(this.startTime, this.endTime);
    // returns an array of moment.js instances for every 20 minutes of time in the time range.
    return range.by('minute', { step: 36 });
  }
};
