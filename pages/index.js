import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";
// import "../styles/tailwind.css";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gustavo Scafeli - Software Engineer and Content Creator</title>

        <meta name="og:title" property="og:title" content="Gustavo Scafeli" />
        <meta name="description" content="Developer and Content Creator." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <Header />

        <div class="text-center content-center my-8">
          <h1 class="text-5xl font-bold mb-3">Gustavo Scafeli</h1>
          <p class="text-2xl font-semibold">
            Software Engineer and Content Creator
          </p>
        </div>

        <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-4">
          <div className="self-stretch">
            <Link href="/sobre">
              <a>
                <h3 class="text-3xl font-semibold mb-3">Sobre</h3>
                <p>Um resumo sobre essa pessoa incrível que vos escreve.</p>
              </a>
            </Link>
          </div>

          <Link href="/projetos">
            <a>
              <h3 class="text-3xl font-semibold mb-3">Projetos</h3>
              <p>Uma lista de projetos em que trabalhei / estou trabalhando.</p>
            </a>
          </Link>

          <Link href="/blog">
            <a>
              <h3 class="text-3xl font-semibold mb-3">Blog</h3>
              <p>
                Veja todos os artigos que já escrevi sobre tecnologia e
                conteúdo.
              </p>
            </a>
          </Link>

          <Link href="/loja">
            <a>
              <h3 class="text-3xl font-semibold mb-3">Loja</h3>
              <p>Aqui estão os cursos, livros e produtos que eu indico.</p>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
