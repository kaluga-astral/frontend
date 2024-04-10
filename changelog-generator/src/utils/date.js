const dayjs = require('dayjs');

const dateToView = (date) => dayjs(date).format('DD.MM.YYYY');

const subtractDays = (date, amount) =>
  dayjs(date).subtract(amount, 'day').toDate();

module.exports = { dateToView, subtractDays };
