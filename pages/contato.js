import Head from "next/head";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";

import styles from "../styles/Home.module.css";

export default function Contato() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contato | Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <h1 className={styles.sectitle}>Contato</h1>

        <p className={styles.description}>Programador e Criador de Conteúdo</p>

        <div className={styles.grid}>
          <ul>
            <li>Email</li>
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
