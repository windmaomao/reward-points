import { useState, useEffect } from 'react';
import styles from './Rewards.module.css';

export function RewardsTable() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/api/rewards')
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <div className={styles.cards}>
      {data.map(({ user, rewards, dates }) => (
        <div key={user} className={styles.card}>
          <h3>
            <span>{user}</span>
            <span>
              {rewards}
              <small>pt</small>
            </span>
          </h3>
          <div className={styles.table}>
            {dates.map(({ date, rewards, amounts }) => (
              <div key={date} className={styles.row}>
                <span>{date}</span>
                <span>
                  {rewards}
                  <small>
                    pt ({amounts.length} orders)
                  </small>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
