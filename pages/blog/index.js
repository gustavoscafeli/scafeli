import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

import { client } from "../../lib/prismic-configuration";

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Gustavo Scafeli</title>
        <meta name="og:title" property="og:title" content="Blog" />
        <meta
          name="description"
          content="Conteúdos de qualidade sobre programação e negócios."
        />
      </Head>

      <Header />

      <div
        data-aos="fade"
        data-aos-duration="1000"
        className="container blog__area"
      >
        <div className="head__page">
          <h1>Blog</h1>
          <p classNam="lead">
            Um blog sobre desenvolvimento, criatividade e produtividade.
          </p>
        </div>

        <div className="row">
          <div className="col-md-9">
            <div className="row">
              {posts.results.map((post) => (
                <Link
                  href="/blog/[uid]"
                  as={`/blog/${post.uid}`}
                  key={post.uid}
                >
                  <a className="col-md-12 single__post__item">
                    {/* <img
                      src={post.data.featured_img.url}
                      alt={post.data.title}
                    /> */}

                    {RichText.render(post.data.title)}

                    {RichText.render(post.data.description)}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-md-3">sidebar</div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
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

  const home = await client.getSingle("blog_post", {
    orderings: "[my.post.date desc]",
  });

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    { orderings: "[my.post.date desc]" }
  );

  posts.results.map((post) => {
    const dateArray = post.data.date.split("-");
    post.data.formattedDate = `${dateArray[2]} de ${
      mapNumberToMonth[dateArray[1] - 1]
    } de ${dateArray[0]}`;

    // const post = post.results;
    // const image = post.illustration;
    // const featured_img = image.url;
  });

  return {
    props: {
      posts,
      // home,
    },
  };
};
