import Head from "next/head";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja | Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <h1 className={styles.sectitle}>Produtos recomendados</h1>

        <p className={styles.description}>Programador e Criador de Conteúdo</p>

        <div className={styles.grid}>
          <Link href="/timeline">
            <a className={styles.card}>
              <h3>Timeline</h3>
              <p>A forma mais simples de você conhecer a minha história.</p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Projetos</h3>
            <p>Uma lista de projetos em que trabalhei / estou trabalhando.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Blog</h3>
            <p>
              Veja todos os artigos que já escrevi sobre tecnologia e conteúdo.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Loja</h3>
            <p>Aqui estão os cursos, livros e produtos que eu indico.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Contato</h3>
            <p>
              Sem o clichê de <i>tomar um café</i>, aqui você pode falar comigo.
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
