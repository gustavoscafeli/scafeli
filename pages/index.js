import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Gustavo Scafeli</title>

        <meta name="og:title" property="og:title" content="Gustavo Scafeli" />
        <meta
          name="description"
          content="Senior Software Engineer, JavaScript enthusiast and educator."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <p>Hi, my name is</p>
        <h1>
          Gustavo Scafeli. <br />
          Software Engineer and Ethical Hacker.
        </h1>

        <img src="https://images.unsplash.com/photo-1590212151175-e58edd96185b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
      </div>
    </Layout>
  );
}
