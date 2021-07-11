import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Layout from "../components/layout";

// import TopTracks from "../components/TopTracks";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="img__about"></div>

      <div
        data-aos="fade"
        data-aos-duration="1000"
        className="container about__area"
      >
        <div className="head__page">
          <h1>About</h1>
        </div>
      </div>
    </Layout>
  );
}
