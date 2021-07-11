import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Layout from "../../components/layout";

export default function Projetos() {
  return (
    <Layout>
      <Head>
        <title>Works - Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="cards__projects">
        <div className="container">
          <div className="head__page">
            <h1>Works</h1>
          </div>
        </div>
      </section>
    </Layout>
  );
}
