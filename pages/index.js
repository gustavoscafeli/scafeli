import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scafeli - Estúdio Digital Criativo</title>

        <meta name="og:title" property="og:title" content="Scafeli" />
        <meta name="description" content="Creative Digital Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <section className="hero">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-7 text-center">
                <h1>
                  Nós conectamos marcas e consumidores através de experiências
                  digitais.
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="home-area">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <p className="primary-color">Quem somos</p>
              </div>
              <div className="col-md-8">
                <h1>
                  Combinando pesquisa, dados, design centrado no usuário e
                  testes com clientes reais, criamos experiências que alcançam
                  milhões - transformando negócios e proporcionando crescimento
                  para nossos clientes.
                </h1>
                <p>
                  Somos um estúdio digital com sede na Rio de Janeiro, operando
                  e conectado globalmente. Trabalhamos com marcas de todo o
                  mundo para projetar interfaces que melhoram a experiência de
                  seus clientes e geram o crescimento dos negócios.
                </p>

                <p>
                  Com alguns dos melhores talentos do continente, combinados com
                  nossa rede remota, somos capazes de moldar nossas equipes para
                  atender às necessidades de qualquer projeto ou brief.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="home-area">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <p className="primary-color">O que fazemos</p>
              </div>

              <div className="col-md-8">
                <h1>
                  Nós criamos interfaces, desenvolvemos códigos, realizamos
                  pesquisas, criamos experiências digitais através do design e
                  produzimos conteúdos para o seu projeto.
                </h1>
                <p>
                  Enviamos centenas de projetos e recursos de sucesso para os
                  nossos clientes. Evoluímos a cada sprint. Atendemos todo o
                  mundo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container single-service">
            <div className="row d-flex justify-content-between">
              <div className="col-md-6">
                <h1>Interfaces Digitais</h1>
                <p>
                  Nós criamos interfaces, se sua empresa vende diretamente para
                  consumidores ou outras empresas, para qualquer tipo de
                  dispositivo inteligente ou tamanho de tela.
                </p>
              </div>
              <div className="col-md-5">
                <ul>
                  <li>Sites e plataformas</li>
                  <li>Aplicativos móveis</li>
                  <li>In-Store Displays</li>
                  <li>Dispositivos inteligentes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container single-service">
            <div className="row d-flex justify-content-between">
              <div className="col-md-6">
                <h1>Branding Digital</h1>
                <p>
                  Tornamos sua marca visível, relevante e eficaz, colocando o
                  digital no centro de seu ecossistema. Garantimos que sua marca
                  se traduza e viva bem em todas as suas propriedades digitais.
                </p>
              </div>
              <div className="col-md-5">
                <ul>
                  <li>Identidade da marca</li>
                  <li>Diretrizes da marca</li>
                  <li>Recursos adicionais da marca</li>
                  <li>Guias de estilo</li>
                  <li>Sistemas de design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container single-service">
            <div className="row d-flex justify-content-between">
              <div className="col-md-6">
                <h1>Produção de Contéudos</h1>
                <p>
                  Nós projetamos e criamos o conteúdo para as interfaces e
                  plataformas que construímos. Com um conhecimento profundo de
                  seu produto e de seus clientes, sabemos a melhor forma de
                  criar conteúdo para vender esses produtos.
                </p>
              </div>

              <div className="col-md-5">
                <ul>
                  <li>Platform Assets</li>
                  <li>Illustration and 3D</li>
                  <li>Lifestyle Photography</li>
                  <li>Video and Motion</li>
                  <li>Campaign Assets and Rollout</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
