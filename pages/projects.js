import Head from "next/head";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Projetos() {
  return (
    <div>
      <Head>
        <title>Projects | Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-4">
          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="/projetos/herocontent">
              <a>
                <h3 class="group-hover:text-indigo-600 font-semibold">
                  adidas® Superstar
                </h3>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="/projetos/herocontent">
              <a>
                <h3 class="group-hover:text-indigo-600 font-semibold">
                  Hero Content
                </h3>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="/projetos/herocontent">
              <a>
                <h3 class="group-hover:text-indigo-600 font-semibold">
                  Projeto Med
                </h3>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="/projetos/herocontent">
              <a>
                <h3 class="group-hover:text-indigo-600 font-semibold">Zappy</h3>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="/projetos/herocontent">
              <a>
                <h3 class="group-hover:text-indigo-600 font-semibold">
                  Banned WP Theme
                </h3>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="/projetos/herocontent">
              <a>
                <h3 class="group-hover:text-indigo-600 font-semibold">
                  Movier (Netflix Clone)
                </h3>
              </a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
