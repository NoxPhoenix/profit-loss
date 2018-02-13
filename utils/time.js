const momentRound = require('moment-round');
const { extendMoment } = require('moment-range');

const moment = extendMoment(momentRound);

module.exports = {
  round (time, interval, unit) {
    return time.round(interval, unit);
  },

  now () {
    return moment()
      .utc()
      .round(1, 'second');
  },

  format (time) {
    return moment(time).utc();
  },

  ISO8601 (time) {
    return time.toISOString();
  },

  unix (time) {
    return this.format(time).unix();
  },

  range (startDate, endDate) {
    return moment.range(this.format(startDate), this.format(endDate));
  },

  isBefore (timeStamp, comparativeTimestamp) {
    return (this.format(timeStamp).isBefore(this.format(comparativeTimestamp)));
  },

  sortOldestToNewest (objectArray, field) {
    return objectArray.sort((a, b) => +this.format(a[field]) - +this.format(b[field]));
  },
};
