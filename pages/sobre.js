import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Header from "../components/Header";
import Footer from "../components/Footer";

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
              Nasci em 1990 no Rio de Janeiro, me apaixonei por tecnologia na
              infância e fiz o meu primeiro site no início da adolescência.
              Criei esse site para compartilhar um pouco da minha experiência
              com outros programadores e pessoas interessadas em ingressar no
              mundo da programação.
            </p>

            <p>
              <a href="#">Clique aqui</a> para ver minha linha do tempo.
            </p>

            <p>É só o início.</p>
          </div>

          <div className="col-md-2 offset-md-1">
            <p>
              Selecionei alguns parceiros com quem tive o prazer de trabalhar.
              Aproveito aqui o espaço para agradecer a confiança depositada no
              meu trabalho.
            </p>

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
