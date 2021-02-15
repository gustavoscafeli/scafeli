import Head from "next/head";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja | Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <h1 className={styles.sectitle}>Produtos recomendados</h1>

        <p className={styles.description}>
          Cursos, livros e produtos que uso diariamente.
        </p>

        <div className={styles.grid}>
          <Link href="https://www.amazon.com.br/Logitech-Tecnologia-LIGHTSYNC-Passthrough-Exclusivo/dp/B085B37DYB/?_encoding=UTF8&pd_rd_w=0pMQh&pf_rd_p=d2ea4cd9-b3fa-4bdb-ab83-24ca9c54ecbe&pf_rd_r=7E8QH23ZNY3T2FZTNVMR&pd_rd_r=0dac3059-a8a9-4196-acee-8d9e5cca0f81&pd_rd_wg=534b5&ref_=pd_gw_ci_mcx_mr_hp_d">
            <a target="_blank" className={styles.card}>
              <h3>Teclado Mecânico Logitech G512 Carbon</h3>
              <p>
                Os switches mecânicos GX Brown oferecem feedback tátil para
                garantir digitação com confiança e precisão durante os jogos -
                sem ser alto demais ou distrativo.
              </p>
            </a>
          </Link>

          <Link href="https://www.amazon.com.br/HD-Externo-6-000GB-Expansion-STEB6000403/dp/B07C7V494X/?_encoding=UTF8&pd_rd_w=0pMQh&pf_rd_p=d2ea4cd9-b3fa-4bdb-ab83-24ca9c54ecbe&pf_rd_r=7E8QH23ZNY3T2FZTNVMR&pd_rd_r=0dac3059-a8a9-4196-acee-8d9e5cca0f81&pd_rd_wg=534b5&ref_=pd_gw_ci_mcx_mr_hp_d">
            <a target="_blank" className={styles.card}>
              <h3>HD Externo (6TB) / USB 3.0 Seagate Expansion</h3>
              <p>
                HD Externo portátil, capacidade de armazenamento de 6.000GB
                (6TB), interface padrão USB v3.0, cabo USB de 120cm incluso, cor
                preto.
              </p>
            </a>
          </Link>

          <Link href="https://www.amazon.com.br/Mouse-Logitech-Master-Wireless-Preto/dp/B07XC2FWD1/?_encoding=UTF8&pd_rd_w=0pMQh&pf_rd_p=d2ea4cd9-b3fa-4bdb-ab83-24ca9c54ecbe&pf_rd_r=7E8QH23ZNY3T2FZTNVMR&pd_rd_r=0dac3059-a8a9-4196-acee-8d9e5cca0f81&pd_rd_wg=534b5&ref_=pd_gw_ci_mcx_mr_hp_d">
            <a target="_blank" className={styles.card}>
              <h3>Mouse Logitech MX Master com Sensor Darkfield</h3>
              <p>
                As personalizações de botões específicas do aplicativo aceleram
                seu fluxo de trabalho nos aplicativos que você mais usa.
              </p>
            </a>
          </Link>

          <Link href="https://www.amazon.com.br/Monitor-Dell-Ultrasharp-LED-U2719D/dp/B07JGSPQV2/?_encoding=UTF8&pd_rd_w=0pMQh&pf_rd_p=d2ea4cd9-b3fa-4bdb-ab83-24ca9c54ecbe&pf_rd_r=7E8QH23ZNY3T2FZTNVMR&pd_rd_r=0dac3059-a8a9-4196-acee-8d9e5cca0f81&pd_rd_wg=534b5&ref_=pd_gw_ci_mcx_mr_hp_d">
            <a target="_blank" className={styles.card}>
              <h3>Monitor Dell UltraSharp 27" U2719D</h3>
              <p>
                Com uma tela praticamente sem bordas, com InfinityEdge, você irá
                desfrutar de uma visualização quase perfeita de seu conteúdo em
                múltiplas telas.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
