import { groupBy } from 'lodash';

function _t(user, date, amount) {
  return { user, date, amount };
}

// for each customer
// group transcations by month
function group(transactions) {
  const userMap = groupBy(transactions, 'user');

  Object.keys(userMap).forEach((user) => {
    const dateMap = groupBy(userMap[user], 'date');
    userMap[user] = dateMap;
  });

  console.log(userMap);
  return userMap;
}

describe('group transactions', () => {
  it('should group by users', () => {
    const transactions = [_t('a', 'Jan', 1), _t('b', 'Feb', 5)];
    const groups = group(transactions);
    expect(Object.values(groups).length).toBe(2);
  });

  it('should group by a user and months', () => {
    const transactions = [_t('a', 'Feb', 1), _t('a', 'Jan', 5)];
    const groups = group(transactions);
    expect(Object.values(groups).length).toBe(1);
    expect(Object.values(groups['a']).length).toBe(2);
  });
});
