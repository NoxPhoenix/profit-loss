const momentRound = require('moment-round');
const { extendMoment } = require('moment-round');

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

  range (startDate, endDate) {
    return moment.range(this.format(startDate), this.format(endDate));
  }
};
