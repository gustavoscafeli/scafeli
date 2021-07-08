import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gustavo Scafeli</title>

        <meta name="og:title" property="og:title" content="Gustavo Scafeli" />
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="cards__home">
          <div className="container">
            <div className="cards__area">
              <Link href="/sobre">
                <a
                  className="card__item card__about"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1000"
                >
                  <img className="img__link" src="/about.svg" />
                  <div className="bottom__link">
                    Sobre <Icon.ArrowUpRight strokeWidth="1.2" />
                  </div>
                  <div className="bottom-fade"></div>
                </a>
              </Link>

              <Link href="/projetos">
                <a
                  className="card__item card__projects"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1500"
                >
                  <img className="img__link" src="/projects.svg" />
                  <div className="bottom__link">
                    Projetos <Icon.ArrowUpRight strokeWidth="1.2" />
                  </div>
                  <div className="bottom-fade"></div>
                </a>
              </Link>

              <Link href="/canal">
                <a
                  className="card__item card__channel"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000"
                >
                  <img className="img__link" src="/freebies.svg" />
                  <div className="bottom__link">
                    Meu canal <Icon.ArrowUpRight stroke-width="1.2" />
                  </div>
                  <div className="bottom-fade"></div>
                </a>
              </Link>

              <Link href="/blog">
                <a
                  className="card__item card__blog"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2500"
                >
                  <img className="img__link" src="/blog.svg" />
                  <div className="bottom__link">
                    Blog <Icon.ArrowUpRight strokeWidth="1.2" />
                  </div>
                  <div className="bottom-fade"></div>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
