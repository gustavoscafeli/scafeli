import Head from "next/head";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Timeline() {
  return (
    <div>
      <Head>
        <title>Timeline | Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <div class="text-center content-center my-8">
          <h1 class="text-5xl font-bold mb-3">Gustavo Scafeli</h1>
          <p class="text-2xl font-semibold">Linha do tempo</p>
        </div>

        <div className="max-w-screen-md mx-auto">
          <div>
            <h3 class="font-semibold mb-2">2020</h3>
            <p>
              <i class="far fa-check-circle"></i> Criei a{" "}
              <a target="_blank" href="https://herocontent.vercel.app">
                Hero Content
              </a>
              . ❤️
            </p>

            <p>
              <i class="far fa-check-circle"></i> Ingressei no curso de ADS na
              UNESA.
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">2017</h3>
            <p>
              <i class="far fa-check-circle"></i> Voltei para o{" "}
              <a
                target="_blank"
                href="https://pt.wikipedia.org/wiki/Rio_de_Janeiro_(estado)"
              >
                Rio de Janeiro
              </a>{" "}
              como Consultor e Desenvolvedor Freelancer.
            </p>

            <p>
              <i class="far fa-check-circle"></i> Trabalhei com as empresas
              Adidas, BNDES, Benfeitoria, Microsoft e Petrobras.
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">2016</h3>
            <p>
              <i class="far fa-check-circle"></i> Mudei para{" "}
              <a target="_blank" href="https://pt.wikipedia.org/wiki/Curitiba">
                Curitiba, Paraná
              </a>
              .
            </p>

            <p>
              <i class="far fa-check-circle"></i> Ingressei na{" "}
              <a target="_blank" href="https://bigbrain.com.br">
                Big Brain Education
              </a>{" "}
              como Product Owner.
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">2015</h3>
            <p>
              <i class="far fa-check-circle"></i> Fui promovido a Gerente de
              Projetos na{" "}
              <a target="_blank" href="https://martinicadigital.com.br">
                Martinica Digital
              </a>
              .
            </p>

            <p>
              <i class="far fa-check-circle"></i> Concluí meus estudos na{" "}
              <a target="_blank" href="https://ufrj.br">
                UFRJ
              </a>
              .
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">2014</h3>

            <p>
              <i class="far fa-check-circle"></i> Me tornei um{" "}
              <a
                target="_blank"
                href="https://www.sebrae.com.br/sites/PortalSebrae/sebraeaz/o-que-e-ser-mei,e0ba13074c0a3410VgnVCM1000003b74010aRCRD"
              >
                MEI
              </a>
              .
            </p>

            <p>
              <i class="far fa-check-circle"></i> Ingressei na agência{" "}
              <a target="_blank" href="https://martinicadigital.com.br">
                Martinica Digital
              </a>{" "}
              como Desenvolvedor Web Full Stack.
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">2012</h3>
            <p>
              <i class="far fa-check-circle"></i> Fui aprovado no Processo
              Seletivo 2011/2 do{" "}
              <a target="_blank" href="https://www.facebook.com/grisdccufrj/">
                GRIS
              </a>{" "}
              da UFRJ.
            </p>

            <p>
              <i class="far fa-check-circle"></i> Ingressei como Desenvolvedor
              Full Stack (PHP){" "}
              <a target="_blank" href="http://www.etu.ufrj.br">
                ETU UFRJ
              </a>
              .
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">2010</h3>
            <p>
              <i class="far fa-check-circle"></i> Ingressei no curso de
              matemática na UFRJ. 🔥
            </p>

            <p>
              <i class="far fa-check-circle"></i> Ingressei como Estagiário
              Desenvolvedor{" "}
              <a target="_blank" href="https://www.perl.org">
                Perl
              </a>{" "}
              no{" "}
              <a target="_blank" href="https://www.iq.ufrj.br">
                IQ UFRJ
              </a>
              .
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">2009</h3>
            <p>
              <i class="far fa-check-circle"></i> Fui aprovado no vestibular da
              UFRJ.❤️
            </p>

            <p>
              <i class="far fa-check-circle"></i> Comecei a estudar Perl,
              JavaScript e WordPress.
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">2008</h3>
            <p>
              <i class="far fa-check-circle"></i> Passei no meu primeiro
              concurso,{" "}
              <a target="_blank" href="https://www.marinha.mil.br/cpesfn/">
                Fuzileiros Navais - Marinha do Brasil
              </a>
              .
            </p>
            <p>
              <i class="far fa-check-circle"></i> Passei no meu segundo
              concurso,{" "}
              <a
                target="_blank"
                href="https://www.marinha.mil.br/sspm/escola-aprendizes/eam_princ"
              >
                EAM - Marinha do Brasil
              </a>
              .
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">2007</h3>
            <p>
              <i class="far fa-check-circle"></i> Meu primeiro emprego com a
              carteira assinada.
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">2000</h3>
            <p>
              <i class="far fa-check-circle"></i> Meu primeiro computador.
            </p>
            <p>
              <i class="far fa-check-circle"></i> Iniciei a jornada para me
              tornar um mestre Pokémon.
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">1990</h3>
            <p>
              <i class="far fa-check-circle"></i> Nasci no dia 19 de novembro.
              👶🏼🍼
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
