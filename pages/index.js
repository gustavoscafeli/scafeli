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
                  Engenheiro de software, criador do <a href="/">Zappy</a> e CTO
                  do{" "}
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

              {/* <Link href="/freebies">
                <a
                  className="card__item card__channel"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="2000"
                >
                  <img className="img__link" src="/freebies.svg" />
                  <div className="bottom__link">
                    Produtos <Icon.ArrowUpRight strokeWidth="1.2" />
                  </div>
                  <div className="bottom-fade"></div>
                </a>
              </Link> */}

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

        <section className="products-home">
          <div className="container">
            <div className="row">
              <p>Produtos</p>
            </div>

            <div className="row">
              <div className="col-md-3">
                <img src="https://images.unsplash.com/photo-1608883839291-d045bb16365f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRzaGlydHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <h4>Camiseta Developer</h4>
                <p>89.90</p>
              </div>

              <div className="col-md-3">
                <img src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <h4>Camiseta MTSBWY</h4>
                <p>89.90</p>
              </div>

              <div className="col-md-3">
                <img src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <h4>Camiseta Support</h4>
                <p>89.90</p>
              </div>

              <div className="col-md-3">
                <img src="https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <h4>Camiseta Developer</h4>
                <p>89.90</p>
              </div>
            </div>

            <div className="row">
              <a href="#">Ver mais</a>
            </div>
          </div>
        </section>

        <div className="container"></div>

        <section className="instagram-home">
          <div className="container">
            <div className="instagram-home__head">
              <p>@gustavoscafeli</p>
              <a href="#">Seguir</a>
            </div>

            <div className="feed-instagram">
              <img src="https://images.unsplash.com/photo-1616029832310-d07b9d4f1d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
              <img src="https://images.unsplash.com/photo-1616933067445-4b556aa759c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
              <img src="https://images.unsplash.com/photo-1616933067445-4b556aa759c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
              <img src="https://images.unsplash.com/photo-1616933067937-e4284baf566e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
