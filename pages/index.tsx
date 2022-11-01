import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Funstack</title>
        <meta
          name="description"
          content="The most fun frontend stack ready for production"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to the funstack</h1>
      </main>

      <footer className={styles.footer}>Powered by OmkoBass</footer>
    </div>
  );
}
