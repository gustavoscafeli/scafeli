import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gustavo Scafeli - Software Engineer</title>

        <meta name="og:title" property="og:title" content="Gustavo Scafeli" />
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <section className="hero">
          <div className="container">
            <h1>
              Software Engineer, founder of <a href="/">Zappy</a> and currently
              working as CTO at{" "}
              <a href="https://anonimatta.com.br" target="_blank">
                Anonimatta
              </a>
              .
            </h1>

            <a href="https://linkedin.com/in/scafeli" target="_blank">
              View more about me <Icon.ChevronRight />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
