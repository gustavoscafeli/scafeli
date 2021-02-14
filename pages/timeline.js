import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Timeline() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Timeline | Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <h1 className={styles.sectitle}>Linha do tempo</h1>

        <p className={styles.description}>
          Olá, eu sou o Gustavo Scafeli. Sou programador desde 2009, já tive o
          prazer de trabalhar com empresas incríveis como Adidas, Petrobras e
          Microsoft.{" "}
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
            <h3>2016</h3>
            <p>
              <i class="far fa-check-circle"></i> Mudei para{" "}
              <a target="_blank" href="https://pt.wikipedia.org/wiki/Curitiba">
                Curitiba
              </a>
              .
            </p>

            <p>
              <i class="far fa-check-circle"></i> Comecei a trabalhar na{" "}
              <a target="_blank" href="https://bigbrain.com.br">
                Big Brain Education
              </a>{" "}
              como Product Owner.
            </p>
          </div>

          <div className={styles.cardtimeline}>
            <h3>2015</h3>
            <p>
              <i class="far fa-check-circle"></i> Fui promovido na{" "}
              <a target="_blank" href="https://bigbrain.com.br">
                Martinica Digital
              </a>{" "}
              para gerente de projetos.
            </p>
          </div>

          <div className={styles.cardtimeline}>
            <h3>2014</h3>

            <p>
              <i class="far fa-check-circle"></i> Abri um{" "}
              <a
                target="_blank"
                href="https://www.sebrae.com.br/sites/PortalSebrae/sebraeaz/o-que-e-ser-mei,e0ba13074c0a3410VgnVCM1000003b74010aRCRD"
              >
                MEI
              </a>
              .
            </p>

            <p>
              <i class="far fa-check-circle"></i> Comecei a trabalhar na{" "}
              <a target="_blank" href="https://bigbrain.com.br">
                Martinica Digital
              </a>{" "}
              como Desenvolvedor Front-end.
            </p>
          </div>

          <div className={styles.cardtimeline}>
            <h3>2012</h3>
            <p>
              <i class="far fa-check-circle"></i> Fui aprovado no Processo
              Seletivo 2011/2 do{" "}
              <a target="_blank" href="https://www.facebook.com/grisdccufrj/">
                GRIS
              </a>{" "}
              da UFRJ.
            </p>

            <p>
              <i class="far fa-check-circle"></i> Terminei o estágio no{" "}
              <a target="_blank" href="https://www.iq.ufrj.br/">
                IQ UFRJ
              </a>
              .
            </p>

            <p>
              <i class="far fa-check-circle"></i> Comecei a trabalhar no{" "}
              <a target="_blank" href="http://www.etu.ufrj.br">
                ETU UFRJ
              </a>{" "}
              como Desenvolvedor Fullstack (PHP).
            </p>
          </div>

          <div className={styles.cardtimeline}>
            <h3>2010</h3>
            <p>
              <i class="far fa-check-circle"></i> Comecei a estudar matemática
              na UFRJ. 🔥
            </p>

            <p>
              <i class="far fa-check-circle"></i> Consegui o meu primeiro
              estágio como desenvolvedor{" "}
              <a target="_blank" href="https://www.perl.org">
                Perl
              </a>{" "}
              no{" "}
              <a target="_blank" href="https://www.iq.ufrj.br">
                IQ UFRJ
              </a>
              .
            </p>
          </div>

          <div className={styles.cardtimeline}>
            <h3>2009</h3>
            <p>
              <i class="far fa-check-circle"></i> Passei no vestibular da UFRJ
              (Matemática).❤️
            </p>
          </div>

          <div className={styles.cardtimeline}>
            <h3>2008</h3>
            <p>
              <i class="far fa-check-circle"></i> Passei no meu primeiro
              concurso (
              <a target="_blank" href="https://www.marinha.mil.br/cpesfn/">
                Fuzileiros Navais
              </a>{" "}
              - Marinha do Brasil).
            </p>
            <p>
              <i class="far fa-check-circle"></i> Passei no meu segundo concurso
              (
              <a
                target="_blank"
                href="https://www.marinha.mil.br/sspm/escola-aprendizes/eam_princ"
              >
                EAM
              </a>{" "}
              - Marinha do Brasil).
            </p>
          </div>

          <div className={styles.cardtimeline}>
            <h3>2007</h3>
            <p>
              <i class="far fa-check-circle"></i> Meu primeiro emprego com a
              carteira assinada.
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

          <div className={styles.cardtimeline}>
            <h3>1990</h3>
            <p>
              <i class="far fa-check-circle"></i> Nasci 👶🏼🍼
            </p>
          </div>

          <a href="/" className={styles.card}>
            <h3>Quer ver mais?</h3>
            <p>Acesse o meu perfil no LinkedIn.</p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
