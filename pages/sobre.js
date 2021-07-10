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

            <p>É só o início.</p>
          </div>

          <div className="col-md-2 offset-md-1">
            <p>
              <Icon.Minus strokeWidth="1.2" /> Adidas
            </p>
            <p>
              <Icon.Minus strokeWidth="1.2" /> Microsoft
            </p>
            <p>
              <Icon.Minus strokeWidth="1.2" /> Attech Sea
            </p>
            <p>
              <Icon.Minus strokeWidth="1.2" /> Big Brain Education
            </p>
            <p>
              <Icon.Minus strokeWidth="1.2" /> RR MakeUp
            </p>
            <p>
              <Icon.Minus strokeWidth="1.2" /> CFB7 Brasil
            </p>
            <p>
              <Icon.Minus strokeWidth="1.2" /> Academias Be Fit
            </p>
          </div>
          <div className="col-md-2 offset-md-1">
            <p>
              <Icon.Minus strokeWidth="1.2" /> Petrobras
            </p>
            <p>
              <Icon.Minus strokeWidth="1.2" /> OLGA Music
            </p>
            <p>
              <Icon.Minus strokeWidth="1.2" /> Fredy Miller
            </p>
            <p>
              <Icon.Minus strokeWidth="1.2" /> IQ - UFRJ
            </p>
            <p>
              <Icon.Minus strokeWidth="1.2" /> MCP Performance
            </p>
            <p>
              <Icon.Minus strokeWidth="1.2" /> Prefeitura do Rio
            </p>
            <p>
              <Icon.Minus strokeWidth="1.2" /> Adidas
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
