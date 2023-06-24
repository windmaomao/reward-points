import { groupBy, sortBy } from 'lodash';

// Group the transactions
// by user (sorted) and by date (sorted)
// and export the grouped array.
// [
//   { user: 'a', dates: [{ date: '01', amounts: [1, 5] }] },
//   { user: 'b', dates: [{ date: '03', amounts: [1] }] },
// ];
export function group(transactions) {
  const sortedByUser = sortBy(transactions, 'user');
  const userMap = groupBy(sortedByUser, 'user');

  const users = Object.keys(userMap).map((user) => {
    const sortedByDate = sortBy(userMap[user], 'date');
    const dateMap = groupBy(sortedByDate, 'date');
    const dates = Object.keys(dateMap).map((date) => ({
      date,
      amounts: dateMap[date].map((t) => t.amount),
    }));

    return {
      user,
      dates,
    };
  });

  return users;
}
