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
export function reward(transactions) {
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
