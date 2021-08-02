import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Late Me | blog</title>
        <meta name="Late Me" content="Dwi Darma Blog's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>Hi world</body>
    </div>
  );
}
