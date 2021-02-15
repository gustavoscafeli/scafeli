import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Header from "../components/header";
import Footer from "../components/footer";

// import TopTracks from "../components/TopTracks";

export default function Sobre() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sobre | Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        {/* <TopTracks /> */}

        <h1 className={styles.sectitle}>Sobre</h1>

        <p className={styles.description}>
          Você encontrou minha fatia pessoal da internet :)
        </p>

        <p className={styles.description}>
          Nascido na cidade de{" "}
          <a target="_blank" href="https://pt.wikipedia.org/wiki/Itaboraí">
            Itaboraí
          </a>
          , na Região Metropolitana do Rio de Janeiro, eu tive muita sorte de me
          envolver a tecnologia na infância.
        </p>

        <p className={styles.description}>
          Já são mais de 10 anos trabalhando com programação, isso consegui
          adquirir um tipo raro de experiência. O meu trabalho foi desde
          agências à multinacionais, do setor educacional ao entretenimanto, da
          cobertura nacional à internacional.
        </p>

        <p className={styles.description}>
          Sou grato a cada gestor que me deu uma oportunidade, a cada líder que
          me ensinou e a cada "pequeno" cliente que atendi como freelancer.{" "}
        </p>

        <p className={styles.description}>É apenas o começo.</p>
      </main>

      <Footer />
    </div>
  );
}
