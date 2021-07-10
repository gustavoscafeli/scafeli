import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Header from "../components/header";
import Footer from "../components/footer";

// import TopTracks from "../components/TopTracks";

export default function Sobre() {
  return (
    <div>
      <Head>
        <title>Sobre - Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="img__about"></div>

      <div
        data-aos="fade"
        data-aos-duration="1000"
        className="container about__area"
      >
        <div className="head__page">
          <h1>Sobre</h1>
          <p classNam="lead">
            Uma breve descrição sobre a minha trajetória profissional.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p>Olá, meu nome é Gustavo Scafeli.</p>

            <p>
              <a href="#">Clique aqui</a> para ver minha linha do tempo.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
