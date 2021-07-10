import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gustavo Scafeli - Software Engineer</title>

        <meta name="og:title" property="og:title" content="Gustavo Scafeli" />
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Footer />
    </div>
  );
}
