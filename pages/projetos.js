import Head from "next/head";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Projetos() {
  return (
    <div>
      <Head>
        <title>Projetos | Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <div class="text-center content-center my-8">
          <h1 class="text-5xl font-bold mb-3">Gustavo Scafeli</h1>
          <p class="text-2xl font-semibold">Projetos</p>
        </div>

        <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-4">
          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="/projetos/herocontent">
              <a>
                <h3 class="group-hover:text-indigo-600 font-semibold">
                  adidas® Superstar
                </h3>
                <p class="group-hover:text-indigo-600">
                  Produtora de conteúdos digitais para PMEs e agências.
                </p>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="/projetos/herocontent">
              <a>
                <h3 class="group-hover:text-indigo-600 font-semibold">
                  Hero Content
                </h3>
                <p class="group-hover:text-indigo-600">
                  Produtora de conteúdos digitais para PMEs e agências.
                </p>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="/projetos/herocontent">
              <a>
                <h3 class="group-hover:text-indigo-600 font-semibold">
                  Projeto Med
                </h3>
                <p class="group-hover:text-indigo-600">
                  Plataforma de ensino para vestibulandos de Medicina.
                </p>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="/projetos/herocontent">
              <a>
                <h3 class="group-hover:text-indigo-600 font-semibold">
                  Catálogo Digital
                </h3>
                <p class="group-hover:text-indigo-600">
                  Plataforma de criação de catálogos digitais descomplicados
                  para PMEs.
                </p>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="/projetos/herocontent">
              <a>
                <h3 class="group-hover:text-indigo-600 font-semibold">
                  Banned WP Theme
                </h3>
                <p class="group-hover:text-indigo-600">
                  Tema WordPress (WooCommerce) com estilo minimalista.
                </p>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="/projetos/herocontent">
              <a>
                <h3 class="group-hover:text-indigo-600 font-semibold">
                  Movier (Netflix Clone)
                </h3>
                <p class="group-hover:text-indigo-600">
                  Tema WordPress (WooCommerce) com estilo minimalista.
                </p>
              </a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
