import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andy Qin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Andy Qin
        </h1>
        <p className={styles.description}>
          I'm a developer currently working at <a href="https://www.moderntreasury.com/">Modern Treasury</a>.
        </p>
      </main>
    </div>
  )
}
