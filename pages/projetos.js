import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Projetos() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projetos | Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <h1 className={styles.sectitle}>Projetos</h1>

        <p className={styles.description}>
          Alguns dos projetos em que invisto o meu tempo.
        </p>

        <div className={styles.grid}>
          <Link href="/projetos/herocontent">
            <a className={styles.card}>
              <h3>Hero Content</h3>
              <p>Produtora de conteúdos digitais para PMEs e agências.</p>
            </a>
          </Link>

          <Link href="/projetos/projetomed">
            <a className={styles.card}>
              <h3>Projeto Med</h3>
              <p>
                Plataforma de ensino gratuita para vestibulandos de Medicina.
              </p>
            </a>
          </Link>

          <Link href="/projetos/herocontent">
            <a className={styles.card}>
              <h3>Na Sacola</h3>
              <p>Catálogo digital descomplicado e personalizável para PMEs.</p>
            </a>
          </Link>

          <Link href="/projetos/bannedtheme">
            <a className={styles.card}>
              <h3>Banned WP Theme</h3>
              <p>Tema WordPress (WooCommerce) com estilo minimalista.</p>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
