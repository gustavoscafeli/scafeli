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
                    <Icon.Instagram strokeWidth="1.2" />
                  </a>
                </li>

                <li>
                  <a href="https://github.com/Scafeli" target="_blank">
                    <Icon.GitHub strokeWidth="1.2" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://open.spotify.com/playlist/2pyh0HmN7slLDoeky6aNIt?si=GkqlN2GkQnidcsMJFuvorg"
                    target="_blank"
                  >
                    <Icon.Headphones strokeWidth="1.2" />
                  </a>
                </li>

                <li>
                  <a href="mailto:gustavoscafeli@gmail.com">
                    <Icon.Mail strokeWidth="1.2" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="location">
            <Icon.Compass strokeWidth="1.2" /> Rio de Janeiro, Brasil
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
                  Programador, criador do <a href="/">Zappy</a> e CTO no{" "}
                  <a href="https://anonimatta.com.br" target="_blank">
                    Anonimatta
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

              <Link href="/freebies">
                <a
                  className="card__item card__channel"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000"
                >
                  <img className="img__link" src="/freebies.svg" />
                  <div className="bottom__link">
                    Freebies <Icon.ArrowUpRight strokeWidth="1.2" />
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
