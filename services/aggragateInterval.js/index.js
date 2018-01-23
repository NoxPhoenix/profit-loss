const HourStrategy = require('./hour');
const DayStrategy = require('./day');
const WeekStrategy = require('./week');

function chooseStrategy (length, endTime) {
  switch (length) {
    case 'hour':
      return new HourStrategy(endTime);
    case 'day':
      return new DayStrategy(endTime);
    case 'week':
      return new WeekStrategy(endTime);
    default:
      return new DayStrategy(endTime);
  }
}

module.exports = {
  buildTimeRangeArray (length, endTime) {
    return chooseStrategy(length, endTime)
      .then(strategy => strategy.timeRangeArray());
  },
};
