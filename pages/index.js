import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gustavo Scafeli - Software Engineer and Content Creator</title>

        <meta name="og:title" property="og:title" content="Gustavo Scafeli" />
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <section className="hero">
          <div className="location">
            <Icon.Compass stroke-width="1.2" /> Rio de Janeiro, Brazil
          </div>

          <div className="social">
            <ul>
              <li>
                <a href="https://instagram.com/gustavoscafeli" target="_blank">
                  <Icon.Instagram stroke-width="1.2" />
                </a>
                <a href="https://github.com/Scafeli" target="_blank">
                  <Icon.GitHub stroke-width="1.2" />
                </a>
                <a href="https://facebook.com/Scafeli" target="_blank">
                  <Icon.Facebook stroke-width="1.2" />
                </a>
                <a href="https://youtube.com/Scafeli" target="_blank">
                  <Icon.Youtube stroke-width="1.2" />
                </a>
              </li>
            </ul>
          </div>

          <div className="developer">
            <span>Software Engineer / Content Creator</span>
          </div>

          <div className="bottom-fade"></div>
        </section>

        <section className="content__one">
          <div className="container">
            <div className="row justify-content-md-center">
              <div
                className="col-md-8 text-center"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h1>
                  I'm a Software Engineer, founder of <a href="/">Zappy</a>, CTO
                  at{" "}
                  <a href="https://anonimatta.com.br" target="_blank">
                    Anonimatta
                  </a>{" "}
                  and content creator at{" "}
                  <a href="https://anonimatta.com.br" target="_blank">
                    YouTube
                  </a>
                  .
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="cards__home">
          <div className="container">
            <div className="cards__area">
              <Link href="/about">
                <a
                  className="card__item card__about"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1000"
                >
                  <img className="img__link" src="/logo-white.svg" />
                  <div className="bottom__link">
                    About me <Icon.ArrowUpRight stroke-width="1.2" />
                  </div>
                  <div className="bottom-fade"></div>
                </a>
              </Link>

              <Link href="/projects">
                <a
                  className="card__item card__projects"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1500"
                >
                  <img className="img__link" src="/logo-white.svg" />
                  <div className="bottom__link">
                    Projects <Icon.ArrowUpRight stroke-width="1.2" />
                  </div>
                  <div className="bottom-fade"></div>
                </a>
              </Link>

              <Link href="/blog">
                <a
                  className="card__item card__channel"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000"
                >
                  <img className="img__link" src="/logo-white.svg" />
                  <div className="bottom__link">
                    My channel <Icon.ArrowUpRight stroke-width="1.2" />
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
                  <img className="img__link" src="/logo-white.svg" />
                  <div className="bottom__link">
                    Blog (in pt_BR) <Icon.ArrowUpRight stroke-width="1.2" />
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
