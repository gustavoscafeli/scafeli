import Head from "next/head";
import Link from "next/link";

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

      <div className="container about__area">
        <div className="head__page">
          <h1>Sobre</h1>
          <p classNam="lead">uahsuhas aush auh aush</p>
        </div>

        <div className="row">
          <div className="col-md-9">
            <p>
              Hey, I’m Lee. I'm a developer, writer, and the creator of
              Mastering Next.js and React 2025.
            </p>
            <p>I work at ▲Vercel as a Solutions Architect.</p>
            <p>
              I’ve spoken across the country at conferences and meet-ups about
              front-end development, design, and recruiting. I write about
              development, tech careers, and my personal life on my newsletter.
            </p>
            <p>
              I grew up in small-town Iowa and went to school at Iowa State,
              graduating with a degree in Computer Engineering. I spend my free
              time playing music, creating videos, and enjoying time with
              friends and family in Des Moines, IA.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
