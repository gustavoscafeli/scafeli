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

        <div className={styles.bodyabout}>
          <p>Você encontrou minha fatia pessoal da internet :)</p>

          <p>
            Nascido na cidade de Itaboraí, Rio de Janeiro, eu tive muita sorte
            de ter contato com computadores e{" "}
            <a
              target="_blank"
              href="https://pt.wikipedia.org/wiki/Super_Nintendo_Entertainment_System"
            >
              outras tecnologias
            </a>{" "}
            durante a infância. Essa aproximação despertou a curiosidade, que
            mais tarde se tornaria uma paixão.
          </p>

          <p>
            Já são mais de 10 anos trabalhando com programação. O meu esforço e
            trabalho foram reconhecidos de{" "}
            <a target="_blank" href="https://martinicadigital.com.br">
              agências
            </a>{" "}
            à{" "}
            <a target="_blank" href="https://www.microsoft.com/pt-br">
              multinacionais
            </a>
            , do setor{" "}
            <a target="_blank" href="https://bigbrain.com.br">
              educacional
            </a>{" "}
            ao{" "}
            <a target="_blank" href="https://www.gameinformer.com">
              entretenimento
            </a>
            , em território nacional e internacional.
          </p>

          <p>
            Sou grato a cada gestor que me deu uma oportunidade, a cada líder
            que dedicou o seu tempo para aperfeiçoar o meu desempenho, a cada
            professor pela paciência, e a cada empresa que atendi como
            freelancer ou consultor.
          </p>

          <p>
            O meu objetivo a longo prazo é trabalhar ativamente no{" "}
            <a
              target="_blank"
              href="http://cenarioseducacao2032.org.br/contexto-da-educacao-basica-brasileira/#:~:text=Atualmente%2C%20o%20investimento%20público%20direto,distantes%20de%20um%20cenário%20ideal."
            >
              cenário educacional brasileiro
            </a>{" "}
            através do meu conhecimento em tecnologia. Especialmente com as
            classes mais carentes, as que não podem pagar por uma educação de
            qualidade.
          </p>

          <p>É apenas o começo.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
