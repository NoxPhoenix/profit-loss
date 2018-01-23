const HourStrategy = require('./hour');
const DayStrategy = require('./day');
const WeekStrategy = require('./week');

function chooseStrategy (length, endTime) {
  switch (length) {
    case 'hour':
      return Promise.resolve(new HourStrategy(endTime));
    case 'day':
      return Promise.resolve(new DayStrategy(endTime));
    case 'week':
      return Promise.resolve(new WeekStrategy(endTime));
    default:
      return Promise.resolve(new DayStrategy(endTime));
  }
}

module.exports = function buildTimeRange (length, endTime) {
  return chooseStrategy(length, endTime)
    .then(strategy => strategy.timeRange());
};
