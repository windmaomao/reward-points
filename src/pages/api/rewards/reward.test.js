import { group } from './group';
import { point } from './point';

// Reward transactions
// and export the grouped array.
// [
//   {
//     user: 'a',
//     dates: [{ date: '01', rewards: 1 }],
//     rewards: 1,
//   },
// ];
function reward(transactions) {
  const users = group(transactions);
  return users.map((user) => {
    const dates = user.dates.map((date) => {
      const points = date.amounts.map(point);
      const rewards = points.reduce((acc, v) => acc + v, 0);
      return {
        ...date,
        rewards,
      };
    });

    const rewards = dates.reduce(
      (acc, d) => acc + d.rewards,
      0
    );

    return {
      ...user,
      dates,
      rewards,
    };
  });
}

function _t(user, date, amount) {
  return { user, date, amount };
}

describe('reward transactions', () => {
  it('should reward a single transaction', () => {
    const list = reward([_t('a', '01', 51)]);

    // console.log(list);
    // console.log(list[0].dates);
    expect(list[0].rewards).toBe(1);
  });

  it('should reward two transactions', () => {
    const list = reward([
      _t('a', '01', 51),
      _t('a', '01', 51),
    ]);

    expect(list[0].rewards).toBe(2);
  });

  it('should reward two different dates', () => {
    const list = reward([
      _t('a', '01', 120),
      _t('a', '02', 51),
    ]);

    expect(list[0].rewards).toBe(91);
  });
});
