import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Freebies() {
  return (
    <>
      <Head>
        <title>Freebies - Gustavo Scafeli</title>
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
          <h1>Freebies</h1>
          <p classNam="lead">
            Uma seleção de recursos gratuitos para desenvolvedores.
          </p>
        </div>

        <div className="row">
          <div className="col-md-8">
            <p>Em breve.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
