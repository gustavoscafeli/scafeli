import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Projetos() {
  return (
    <div>
      <Head>
        <title>Projects - Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="cards__projects">
        <div className="container">
          <div className="head__page">
            <h1>Projetos</h1>
            <p classNam="lead">Conheça alguns dos meus projetos pessoais</p>
          </div>
        </div>

        <div className="container">
          <div className="cards__area">
            <Link href="/projetos/zappy">
              <a
                className="card__item card__zappy"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
              >
                <img className="img__link" src="/logo-white.svg" />
                <div className="bottom__link">
                  Zappy <Icon.ArrowUpRight stroke-width="1.2" />
                </div>
                <div className="bottom-fade"></div>
              </a>
            </Link>

            <Link href="/projetos/adidas">
              <a
                className="card__item card__adidas"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
              >
                <img className="img__link" src="/logo-white.svg" />
                <div className="bottom__link">
                  adidas® Superstar <Icon.ArrowUpRight stroke-width="1.2" />
                </div>
                <div className="bottom-fade"></div>
              </a>
            </Link>

            <Link href="/projetos/herocontent">
              <a
                className="card__item card__herocontent"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2000"
              >
                <img className="img__link" src="/logo-white.svg" />
                <div className="bottom__link">
                  Hero Content <Icon.ArrowUpRight stroke-width="1.2" />
                </div>
                <div className="bottom-fade"></div>
              </a>
            </Link>

            <Link href="/projetos/banned">
              <a
                className="card__item card__banned"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2500"
              >
                <img className="img__link" src="/logo-white.svg" />
                <div className="bottom__link">
                  Banned Theme <Icon.ArrowUpRight stroke-width="1.2" />
                </div>
                <div className="bottom-fade"></div>
              </a>
            </Link>

            <Link href="/projetos/netflix">
              <a
                className="card__item card__netflix"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2500"
              >
                <img className="img__link" src="/logo-white.svg" />
                <div className="bottom__link">
                  Netflix <Icon.ArrowUpRight stroke-width="1.2" />
                </div>
                <div className="bottom-fade"></div>
              </a>
            </Link>

            <Link href="/blog">
              <a
                className="card__item card__comingsoon"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2500"
              >
                <img className="img__link" src="/logo-white.svg" />
                <div className="bottom__link">
                  Projeto Med <Icon.Loader stroke-width="1.2" />
                </div>
                <div className="bottom-fade"></div>
              </a>
            </Link>

            <Link href="/blog">
              <a
                className="card__item card__comingsoon"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2500"
              >
                <img className="img__link" src="/logo-white.svg" />
                <div className="bottom__link">
                  Mockup Zone <Icon.Loader stroke-width="1.2" />
                </div>
                <div className="bottom-fade"></div>
              </a>
            </Link>

            <Link href="/blog">
              <a
                className="card__item card__comingsoon"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="2500"
              >
                <img className="img__link" src="/logo-white.svg" />
                <div className="bottom__link">
                  Coming soon <Icon.Loader stroke-width="1.2" />
                </div>
                <div className="bottom-fade"></div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
