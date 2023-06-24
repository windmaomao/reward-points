import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { RewardsTable } from '../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Assessment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Assessment - &nbsp;
            <code className={styles.code}>
              Reward Points
            </code>
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Customer Rewards</h2>
            <p>Here is the monthly reward points.</p>
          </div>
        </div>
        <RewardsTable />
      </main>
    </>
  );
}
