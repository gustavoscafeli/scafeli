import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Sobre() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sobre | Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <h1 className={styles.sectitle}>Sobre</h1>

        <p className={styles.description}>
          Minha trajetória pessoal e profissional de forma resumida.
        </p>

        <div className={styles.grid}>
          <div className={styles.cardtimeline}>
            <h3>2020</h3>
            <p>
              <i class="far fa-check-circle"></i> Criei a{" "}
              <a target="_blank" href="https://herocontent.vercel.app">
                Hero Content
              </a>
              , uma empresa de criação de conteúdos digitais para PMEs.
            </p>
          </div>

          <div className={styles.cardtimeline}>
            <h3>2000</h3>
            <p>
              <i class="far fa-check-circle"></i> Meu primeiro computador.
            </p>
            <p>
              <i class="far fa-check-circle"></i> Iniciei a jornada para me
              tornar um mestre Pokémon.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
