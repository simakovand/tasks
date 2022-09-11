const moment = require('moment');
const _ = require('lodash');

const users = [
  {
    userId: '1',
    timestamp: '01/01/2020',
  },
  {
    userId: '2',
    timestamp: '6662905043687',
  },
  {
    userId: '3',
    timestamp: '2662905043687',
  },
  {
    userId: '4',
    timestamp: '9662905043687',
  },
  {
    userId: '15',
    timestamp: '01/11/2003',
  },
  {
    userId: '6',
    timestamp: '6662905043687',
  },
  {
    userId: '7',
    timestamp: '7662905043687',
  },
  {
    userId: '8',
    timestamp: '01/01/1990',
  },
  {
    userId: '9',
    timestamp: '8662905043687',
  },
  {
    userId: '10',
    timestamp: '03/09/2000',
  },
  {
    userId: '11',
    timestamp: '01/09/2000',
  },
  {
    userId: '12',
    timestamp: '1662205043687',
  },
  {
    userId: '13',
    timestamp: '1662905063687',
  },
  {
    userId: '14',
    timestamp: '1664905043687',
  },
  {
    userId: '15',
    timestamp: '01/01/2018',
  },
  {
    userId: '16',
    timestamp: '1666904043687',
  }, {
    userId: '17',
    timestamp: '1262905043687',
  },
  {
    userId: '18',
    timestamp: '1664905043687',
  },
];
function findLastUsers(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!moment(new Date(arr[i].timestamp)).isValid('L')) {
      delete arr[i];
    }
  }
  const arrFilter = arr.filter((el) => el !== null);
  const uniqUserId = _.uniqBy(arrFilter, 'userId');
  const sortTimestamp = uniqUserId.sort((x, y) => moment(x.timestamp, 'L') - moment(y.timestamp, 'L'));
  const onlyTen = sortTimestamp.slice(0, 10);
  return onlyTen;
}
console.log(findLastUsers(users));
// const timestamp = moment(new Date(users[0].timestamp)).format('L');
// console.log(timestamp);
