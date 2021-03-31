import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gustavo Scafeli</title>

        <meta name="og:title" property="og:title" content="Gustavo Scafeli" />
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Header /> */}

        <section data-aos="fade" data-aos-duration="1000" className="hero">
          <div className="nav-fade"></div>

          <div className="header__hero">
            <p>Gustavo Scafeli</p>

            <div className="social">
              <ul>
                <li>
                  <a
                    href="https://instagram.com/gustavoscafeli"
                    target="_blank"
                  >
                    <Icon.Instagram stroke-width="1.2" />
                  </a>
                </li>

                <li>
                  <a href="https://github.com/Scafeli" target="_blank">
                    <Icon.GitHub stroke-width="1.2" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://open.spotify.com/playlist/2pyh0HmN7slLDoeky6aNIt?si=GkqlN2GkQnidcsMJFuvorg"
                    target="_blank"
                  >
                    <Icon.Headphones stroke-width="1.2" />
                  </a>
                </li>

                <li>
                  <a href="mailto:gustavoscafeli@gmail.com">
                    <Icon.Mail stroke-width="1.2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="location">
            <Icon.Compass stroke-width="1.2" /> Rio de Janeiro, Brasil
          </div>

          <div className="scafeli">
            <img src="scafeli-logo-white.svg" />
          </div>

          <div className="developer">
            <span>Photo by Samantha Gades / Unsplash</span>
          </div>

          <div className="bottom-fade"></div>
        </section>

        <section className="content__one">
          <div className="container">
            <div className="row justify-content-md-center">
              <div
                className="col-md-7 text-center"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h3>
                  Programador, criador do <a href="/">Zappy</a>, CTO do{" "}
                  <a href="https://anonimatta.com.br" target="_blank">
                    Anonimatta
                  </a>{" "}
                  e criador no{" "}
                  <a href="https://anonimatta.com.br" target="_blank">
                    YouTube
                  </a>
                  .
                </h3>
              </div>
            </div>
          </div>
        </section>

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
                  <img className="img__link" src="/logo-white.svg" />
                  <div className="bottom__link">
                    Sobre <Icon.ArrowUpRight stroke-width="1.2" />
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
                  <img className="img__link" src="/logo-white.svg" />
                  <div className="bottom__link">
                    Projetos <Icon.ArrowUpRight stroke-width="1.2" />
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
                  <img className="img__link" src="/logo-white.svg" />
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
                  <img className="img__link" src="/logo-white.svg" />
                  <div className="bottom__link">
                    Blog <Icon.ArrowUpRight stroke-width="1.2" />
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
