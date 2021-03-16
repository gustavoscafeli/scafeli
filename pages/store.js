import Head from "next/head";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Loja() {
  return (
    <div>
      <Head>
        <title>Loja | Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <div class="text-center content-center my-8">
          <h1 class="text-5xl font-bold mb-3">Gustavo Scafeli</h1>
          <h3 class="text-2xl font-semibold">Produtos recomendados</h3>
        </div>

        <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-4 px-4">
          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="https://www.amazon.com.br/Logitech-Tecnologia-LIGHTSYNC-Passthrough-Exclusivo/dp/B085B37DYB/?_encoding=UTF8&pd_rd_w=0pMQh&pf_rd_p=d2ea4cd9-b3fa-4bdb-ab83-24ca9c54ecbe&pf_rd_r=7E8QH23ZNY3T2FZTNVMR&pd_rd_r=0dac3059-a8a9-4196-acee-8d9e5cca0f81&pd_rd_wg=534b5&ref_=pd_gw_ci_mcx_mr_hp_d">
              <a target="_blank">
                <h3 class="text-1xl font-semibold mb-2 group-hover:text-indigo-600">
                  Teclado Mecânico Logitech G512 Carbon
                </h3>
                <p className="group-hover:text-indigo-600">
                  Os switches mecânicos GX Brown oferecem feedback tátil para
                  garantir digitação com confiança e precisão durante os jogos -
                  sem ser alto demais ou distrativo.
                </p>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="https://www.amazon.com.br/HD-Externo-6-000GB-Expansion-STEB6000403/dp/B07C7V494X/?_encoding=UTF8&pd_rd_w=0pMQh&pf_rd_p=d2ea4cd9-b3fa-4bdb-ab83-24ca9c54ecbe&pf_rd_r=7E8QH23ZNY3T2FZTNVMR&pd_rd_r=0dac3059-a8a9-4196-acee-8d9e5cca0f81&pd_rd_wg=534b5&ref_=pd_gw_ci_mcx_mr_hp_d">
              <a target="_blank">
                <h3 class="text-1xl font-semibold mb-2 group-hover:text-indigo-600">
                  HD Externo (6TB) / USB 3.0 Seagate Expansion
                </h3>
                <p className="group-hover:text-indigo-600">
                  HD Externo portátil, capacidade de armazenamento de 6.000GB
                  (6TB), interface padrão USB v3.0, cabo USB de 120cm incluso,
                  cor preto.
                </p>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="https://www.amazon.com.br/Mouse-Logitech-Master-Wireless-Preto/dp/B07XC2FWD1/?_encoding=UTF8&pd_rd_w=0pMQh&pf_rd_p=d2ea4cd9-b3fa-4bdb-ab83-24ca9c54ecbe&pf_rd_r=7E8QH23ZNY3T2FZTNVMR&pd_rd_r=0dac3059-a8a9-4196-acee-8d9e5cca0f81&pd_rd_wg=534b5&ref_=pd_gw_ci_mcx_mr_hp_d">
              <a target="_blank">
                <h3 class="text-1xl font-semibold mb-2 group-hover:text-indigo-600">
                  Mouse Logitech MX Master com Sensor Darkfield
                </h3>
                <p className="group-hover:text-indigo-600">
                  As personalizações de botões específicas do aplicativo
                  aceleram seu fluxo de trabalho nos aplicativos que você mais
                  usa.
                </p>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="https://www.amazon.com.br/Monitor-Dell-Ultrasharp-LED-U2719D/dp/B07JGSPQV2/?_encoding=UTF8&pd_rd_w=0pMQh&pf_rd_p=d2ea4cd9-b3fa-4bdb-ab83-24ca9c54ecbe&pf_rd_r=7E8QH23ZNY3T2FZTNVMR&pd_rd_r=0dac3059-a8a9-4196-acee-8d9e5cca0f81&pd_rd_wg=534b5&ref_=pd_gw_ci_mcx_mr_hp_d">
              <a target="_blank">
                <h3 class="text-1xl font-semibold mb-2 group-hover:text-indigo-600">
                  Monitor Dell UltraSharp 27" U2719D
                </h3>
                <p className="group-hover:text-indigo-600">
                  Com uma tela praticamente sem bordas, com InfinityEdge, você
                  irá desfrutar de uma visualização quase perfeita de seu
                  conteúdo em múltiplas telas.
                </p>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="https://www.amazon.com.br/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&dchild=1&keywords=clean+code&qid=1613356977&sr=8-1">
              <a target="_blank">
                <h3 class="text-1xl font-semibold mb-2 group-hover:text-indigo-600">
                  Livro Clean Code, Robert C. Martin
                </h3>
                <p className="group-hover:text-indigo-600">
                  Você lerá códigos aqui, muitos códigos. E você deverá
                  descobrir o que está correto e errado nos códigos.
                </p>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="https://www.amazon.com.br/Refactoring-Improving-Design-Existing-Code/dp/0134757599/ref=pd_sim_2?pd_rd_w=3PVmx&pf_rd_p=0cda1f1d-8b7f-49b5-b2a0-876792b46954&pf_rd_r=GWGBZAPRPRJ560M6VGG9&pd_rd_r=40789414-15d6-4470-85b8-1d8a68cd3bda&pd_rd_wg=79stZ&pd_rd_i=0134757599&psc=1">
              <a target="_blank">
                <h3 class="text-1xl font-semibold mb-2 group-hover:text-indigo-600">
                  Livro Refactoring, Martin Fowler
                </h3>
                <p className="group-hover:text-indigo-600">
                  Aplique rapidamente refatorações convenientes para deixar um
                  software mais fácil de entender e de alterar.
                </p>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="https://www.amazon.com.br/Javascript-Jquery-desenvolvimento-Jon-Duckett/dp/8576089459/ref=pd_sbs_2?pd_rd_w=Cu8y9&pf_rd_p=0b7b5b86-4ae8-4ee9-8222-a387f0fff9c7&pf_rd_r=93N0MB2GCXVX70MK27JX&pd_rd_r=5317aa90-3f95-4dbe-be5a-43a470975853&pd_rd_wg=cXL4e&pd_rd_i=8576089459&psc=1">
              <a target="_blank" className="px-4">
                <h3 class="text-1xl font-semibold mb-2 group-hover:text-indigo-600">
                  Javascript e Jquery: Desenvolvimento de Interfaces web
                  Interativas
                </h3>
                <p className="group-hover:text-indigo-600">
                  Tudo o que você precisa é entender um pouco sobre HTML e CSS.
                </p>
              </a>
            </Link>
          </div>

          <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent px-4 py-6">
            <Link href="https://www.amazon.com.br/Relogio-Amazfit-A1902-Aluminium-Alloy/dp/B07WGW4RLK/ref=pd_sbs_28?pd_rd_w=W9Pg5&pf_rd_p=0b7b5b86-4ae8-4ee9-8222-a387f0fff9c7&pf_rd_r=JFDD1GXNR0ANWD0F4V3X&pd_rd_r=6a4aaed2-6100-4453-8da5-ab5318685980&pd_rd_wg=Z86og&pd_rd_i=B07WGW4RLK&psc=1">
              <a target="_blank" className="px-4">
                <h3 class="text-1xl font-semibold mb-2 group-hover:text-indigo-600">
                  Relógio Amazfit GTR Aluminium
                </h3>
                <p className="group-hover:text-indigo-600">
                  O smartwatch Amazfit GTR apresenta um visual clássico do
                  relógio tradicional, perfeito para esportes e negócios.
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
