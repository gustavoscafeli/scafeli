import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gustavo Scafeli - Developer and Content Creator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <h1 className={styles.title}>Gustavo Scafeli</h1>

        <p className={styles.description}>Programador e Criador de Conteúdo</p>

        <div className={styles.grid}>
          <Link href="/sobre">
            <a className={styles.card}>
              <h3>Sobre</h3>
              <p>Um resumo sobre essa pessoa incrível que vos escreve.</p>
            </a>
          </Link>

          <Link href="/projetos">
            <a className={styles.card}>
              <h3>Projetos</h3>
              <p>Uma lista de projetos em que trabalhei / estou trabalhando.</p>
            </a>
          </Link>

          <Link href="/blog">
            <a className={styles.card}>
              <h3>Blog</h3>
              <p>
                Veja todos os artigos que já escrevi sobre tecnologia e
                conteúdo.
              </p>
            </a>
          </Link>

          <Link href="/timeline">
            <a className={styles.card}>
              <h3>Linha do tempo</h3>
              <p>A forma mais simples de você conhecer a minha trajetória.</p>
            </a>
          </Link>

          <Link href="/loja">
            <a className={styles.card}>
              <h3>Loja</h3>
              <p>Aqui estão os cursos, livros e produtos que eu indico.</p>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
