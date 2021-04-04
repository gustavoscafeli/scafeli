import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
// import { Document } from 'prismic-javascript/types/documents';
// import { MdArrowBack } from 'react-icons/md';

import * as Icon from "react-feather";

import linkResolver from "../../lib/linkResolver";
import { client } from "../../lib/prismic-configuration";

//COMPONENTS
import Header from "../../components/header";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{RichText.asText(post.data.title)} - Gustavo Scafeli</title>
        <meta
          name="og:title"
          property="og:title"
          content={RichText.asText(post.data.title)}
        />
        <meta
          name="description"
          content={RichText.asText(post.data.description)}
        />
      </Head>

      <Header />

      <div className="container blog__area">
        <div className="row justify-content-between">
          <div
            data-aos="fade"
            data-aos-duration="1000"
            className="col-md-8 single__post__content"
          >
            {/* <p className={styles.description}>Programador e Criador de Conteúdo</p> */}

            {RichText.render(post.data.title)}
            <p className="date">Gustavo Scafeli • {post.data.formattedDate}</p>

            <img
              className="featured__img__post"
              src={post.data.featured_img.url}
              alt={post.data.title}
            />

            {RichText.render(post.data.corpo_post, linkResolver)}

            <Link href="/blog">
              <a className="back">
                <Icon.ArrowLeft stroke-width="1.2" /> Voltar aos posts
              </a>
            </Link>
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    { orderings: "[my.post.date desc]" }
  );

  const allBlogPosts = [];

  posts.results.map((post) => {
    allBlogPosts.push({ params: { uid: post.uid } });
  });

  return {
    paths: allBlogPosts,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const mapNumberToMonth = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const post = await client.getByUID("blog_post", params.uid, {
    lang: "pt-br",
  });

  const dateArray = post.data.date.split("-");
  post.data.formattedDate = `${dateArray[2]} de ${
    mapNumberToMonth[dateArray[1] - 1]
  } de ${dateArray[0]}`;

  return {
    props: {
      post,
    },
  };
};
