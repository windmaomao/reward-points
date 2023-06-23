import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Interview Assessment</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Interview Assessment - &nbsp;
            <code className={styles.code}>Reward Points</code>
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              Calculate <span>-&gt;</span>
            </h2>
            <p>Here is your monthly points.</p>
          </a>
        </div>
      </main>
    </>
  );
}
