const data = [
  {
    user: 'Duo',
    dates: [
      { date: '2012-01', amounts: [103, 75], rewards: 81 },
      { date: '2012-02', amounts: [75], rewards: 25 },
      { date: '2012-03', amounts: [75], rewards: 25 },
      { date: '2012-05', amounts: [75, 75], rewards: 50 },
    ],
    rewards: 181,
  },
  {
    user: 'John',
    dates: [
      { date: '2012-03', amounts: [103], rewards: 56 },
      { date: '2012-04', amounts: [75], rewards: 25 },
      { date: '2012-05', amounts: [75, 75], rewards: 50 },
      { date: '2012-08', amounts: [75], rewards: 25 },
      { date: '2012-09', amounts: [75], rewards: 25 },
    ],
    rewards: 181,
  },
];
import styles from './Rewards.module.css';

export function RewardsTable() {
  return (
    <div className={styles.cards}>
      {data.map(({ user, rewards, dates }) => (
        <div key={user} className={styles.card}>
          <h3>
            <span>{user}: </span>
            <span>
              {rewards}
              <small>pt</small>
            </span>
          </h3>
          <div className={styles.table}>
            {dates.map(({ date, rewards, amounts }) => (
              <div key={date} className={styles.row}>
                <span>{date}:</span>
                <span>
                  {rewards}
                  <small>pt</small>
                </span>
                <span>{amounts.length} orders</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
